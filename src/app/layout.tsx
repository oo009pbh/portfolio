import React from 'react';

// Components
import StyledComponentsRegistry from '@styles/StyledComponents';
import Head from 'next/head';
// Styles
import './globals.css';
import { Pretendard } from './fonts/localFontFiles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={Pretendard.className}>
      <Head>
        <title>박병훈의 웹 포트폴리오</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
