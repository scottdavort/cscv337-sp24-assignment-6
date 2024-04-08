import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Reviews from "./components/DisplayReviews";
import { ReviewsProvider } from "./components/reviewsContext";

// Initialize  font styles 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scott Manley | cscv337-sp24-assignment-6",
  description: "NextJS Form App using TailWind CSS, HTML, and TypeScript",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // This is more aligned with the provided reference, but direct manipulation of <html>, <head>, and <body> like this is typically done in _document.js
    <html lang="en" className={inter.className} suppressHydrationWarning={true} >
      <head />
      <body>
        <ReviewsProvider>
          {/* Your children components and Reviews component wrapped in ReviewsProvider */}
          {children}
          <Reviews />
        </ReviewsProvider>
      </body>
    </html>
  );
}