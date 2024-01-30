import { Noto_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
