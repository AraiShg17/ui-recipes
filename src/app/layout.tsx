import { ThemeLoadingOverlay } from "@/components/ThemeLoadingOverlay/ThemeLoadingOverlay";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ViewTransitions } from "@/components/ViewTransitions/ViewTransitions";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Recipes",
  description: "UI implementation recipes with live examples and source code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <ThemeLoadingOverlay />
          <ThemeToggle />
          <ViewTransitions>{children}</ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  );
}
