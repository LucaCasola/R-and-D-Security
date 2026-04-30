// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// UI components
import { Toaster } from "@/components/ui/sonner"

// Custom components
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "R&D Security",
  description: "Your go-to security partner.",
  icons: {
    icon: [
      { 
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      { 
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.ico',
        type: 'image/x-icon',
      },
    ],
    apple: '/apple-icon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="R&D Security" />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        {children}
        <Footer className="bg-secondary-foreground" />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
