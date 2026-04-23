import type { StaticImageData } from 'next/image';

export function imageSrc(image: string | StaticImageData): string {
  return typeof image === 'string' ? image : image.src;
}
