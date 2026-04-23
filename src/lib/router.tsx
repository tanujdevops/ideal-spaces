'use client';

import React from 'react';
import NextLink from 'next/link';
import { useParams as useNextParams, usePathname, useRouter } from 'next/navigation';

type Url = string | URL;

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to?: Url;
  href?: Url;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  children: React.ReactNode;
};

export function Link({ to, href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href ?? to ?? '#'} {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  const pathname = usePathname() ?? '/';
  return {
    pathname,
    search: '',
    hash: '',
    state: null,
    key: pathname,
  };
}

type NavigateOptions = {
  replace?: boolean;
};

export function useNavigate() {
  const router = useRouter();

  return React.useCallback(
    (to: string | number, options?: NavigateOptions) => {
      if (typeof to === 'number') {
        if (to < 0) {
          router.back();
        }
        return;
      }

      if (options?.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    },
    [router]
  );
}

export function useParams<T extends Record<string, string | string[] | undefined> = Record<string, string>>() {
  return useNextParams() as T;
}
