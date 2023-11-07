import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: [
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      fontFamily: 'Pretendard',
      path: './Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  preload: true,
});
