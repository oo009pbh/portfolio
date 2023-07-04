import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import type { AppProps } from 'next/app';

// 클라이언트 사이드 렌더링을 위한 emotion 캐시
const clientSideEmotionCache = createEmotionCache({
  key: 'my-prefix-key',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
