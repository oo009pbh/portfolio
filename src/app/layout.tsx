import React from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>박병훈의 웹 포트폴리오</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
