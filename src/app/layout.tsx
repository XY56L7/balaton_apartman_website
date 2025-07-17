import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lake Spirit - Balaton Apartman",
  description: "Discover the perfect Lake Balaton experience with Lake Spirit. Luxury apartments with stunning lake views and modern amenities.",
  keywords: "Lake Balaton, apartment, luxury, vacation, Hungary, lake view",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
