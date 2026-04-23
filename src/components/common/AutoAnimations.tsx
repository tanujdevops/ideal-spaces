'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const INTERACTIVE_SELECTOR =
  'a[href], button:not([disabled]), [role="button"], summary, input, textarea, select';

const RIPPLE_SELECTOR = 'a[href], button:not([disabled]), [role="button"], summary';

const IMAGE_SELECTOR = 'main img, section img';

const TILT_SELECTOR = [
  'main article',
  'main [class*="rounded"][class*="shadow"]',
  'main [class*="rounded"][class*="border"]',
  'main [class*="overflow-hidden"][class*="group"]',
].join(',');

const REVEAL_CHILD_SELECTOR = [
  ':scope > div:not([class*="absolute"])',
  ':scope [class*="grid"] > *',
  ':scope [class*="space-y"] > *',
  ':scope form > *',
  ':scope article',
  ':scope [class*="rounded"][class*="shadow"]',
  ':scope [class*="rounded"][class*="border"]',
].join(',');

function canEnhance(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;
  if (element.closest('[data-auto-animation-skip]')) return false;

  const rect = element.getBoundingClientRect();
  return rect.width > 12 && rect.height > 12;
}

function canTilt(element: HTMLElement) {
  if (!canEnhance(element)) return false;
  if (element.matches(INTERACTIVE_SELECTOR)) return false;
  if (element.closest('form') && element.getBoundingClientRect().height < 160) return false;

  const rect = element.getBoundingClientRect();
  return rect.width >= 180 && rect.height >= 110;
}

function revealDelayFor(element: HTMLElement) {
  if (!element.parentElement) return '0ms';

  const index = Array.from(element.parentElement.children).indexOf(element);
  return `${Math.min(Math.max(index, 0) % 8, 7) * 45}ms`;
}

function createRipple(event: PointerEvent) {
  const target = event.currentTarget;
  if (!(target instanceof HTMLElement)) return;

  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.75;
  const ripple = document.createElement('span');

  ripple.className = 'auto-ripple';
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;

  target.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
}

function attachTilt(element: HTMLElement) {
  const handlePointerMove = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty('--auto-tilt-y', `${x * 5}deg`);
    element.style.setProperty('--auto-tilt-x', `${y * -4}deg`);
  };

  const handlePointerLeave = () => {
    element.style.setProperty('--auto-tilt-x', '0deg');
    element.style.setProperty('--auto-tilt-y', '0deg');
  };

  element.addEventListener('pointermove', handlePointerMove);
  element.addEventListener('pointerleave', handlePointerLeave);

  return () => {
    element.removeEventListener('pointermove', handlePointerMove);
    element.removeEventListener('pointerleave', handlePointerLeave);
  };
}

export default function AutoAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups: Array<() => void> = [];
    const observedRevealElements = new WeakSet<HTMLElement>();
    const rippleBoundElements = new WeakSet<HTMLElement>();
    const tiltBoundElements = new WeakSet<HTMLElement>();
    let frame = 0;

    body.dataset.autoAnimationReady = prefersReducedMotion ? 'reduced' : 'true';

    const observer = prefersReducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              const target = entry.target as HTMLElement;
              target.dataset.autoReveal = 'visible';
              observer?.unobserve(target);
            });
          },
          {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12,
          }
        );

    const addReveal = (element: HTMLElement) => {
      if (observedRevealElements.has(element)) return;
      if (element.closest('nav')) return;
      if (element.dataset.autoReveal === 'visible') return;
      if (!canEnhance(element)) return;

      observedRevealElements.add(element);
      element.style.setProperty('--auto-delay', revealDelayFor(element));

      if (prefersReducedMotion || !observer) {
        element.dataset.autoReveal = 'visible';
        return;
      }

      element.dataset.autoReveal = 'pending';
      observer.observe(element);
    };

    const enhance = () => {
      document.querySelectorAll<HTMLElement>('main > section, body > div > section, footer').forEach(addReveal);

      document.querySelectorAll<HTMLElement>('main section, body > div > section').forEach((section) => {
        if (!canEnhance(section)) return;

        try {
          section.querySelectorAll<HTMLElement>(REVEAL_CHILD_SELECTOR).forEach(addReveal);
        } catch {
          // Older selector engines can be picky around :scope; section-level reveal still applies.
        }
      });

      document.querySelectorAll<HTMLElement>(INTERACTIVE_SELECTOR).forEach((element) => {
        if (!canEnhance(element)) return;
        element.dataset.autoInteractive = 'true';
      });

      document.querySelectorAll<HTMLElement>(RIPPLE_SELECTOR).forEach((element) => {
        if (!canEnhance(element)) return;
        if (rippleBoundElements.has(element)) return;

        rippleBoundElements.add(element);
        element.addEventListener('pointerdown', createRipple);
        cleanups.push(() => element.removeEventListener('pointerdown', createRipple));
      });

      document.querySelectorAll<HTMLElement>(IMAGE_SELECTOR).forEach((element) => {
        if (!canEnhance(element)) return;
        element.dataset.autoImage = 'true';
      });

      if (hasFinePointer && !prefersReducedMotion) {
        document.querySelectorAll<HTMLElement>(TILT_SELECTOR).forEach((element) => {
          if (!canTilt(element)) return;
          if (element.closest('nav')) return;
          if (tiltBoundElements.has(element)) return;

          tiltBoundElements.add(element);
          element.dataset.autoTilt = 'true';
          cleanups.push(attachTilt(element));
        });
      }
    };

    const scheduleEnhance = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(enhance);
    };

    scheduleEnhance();

    const mutationObserver = new MutationObserver((mutations) => {
      const onlyRipples = mutations.every((mutation) =>
        Array.from(mutation.addedNodes).every(
          (node) => node instanceof HTMLElement && node.classList.contains('auto-ripple')
        )
      );

      if (!onlyRipples) scheduleEnhance();
    });
    mutationObserver.observe(body, { childList: true, subtree: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      mutationObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
