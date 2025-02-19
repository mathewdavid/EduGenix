import React from 'react';
import { Inter } from 'next/font/google';
import StoreProvider from '../components/StoreProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EduGenix - Education Management System',
  description: 'A comprehensive education management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
} 