import React from 'react';

// Components
import StyledComponentsRegistry from '@styles/StyledComponents';
import Head from 'next/head'; // <--- 여기서 Head 컴포넌트를 임포트
// Styles
import './globals.css';
import { pretendard } from './fonts/localFontFiles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>박병훈의 웹 포트폴리오</title>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={pretendard.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
