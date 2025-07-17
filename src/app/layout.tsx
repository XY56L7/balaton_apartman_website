import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balaton Kincse - Luxus Apartmanok",
  description: "Fedezze fel a Balaton tökéletes élményét a Balaton Kincse apartmanokkal. Luxus szállás csodálatos tókilátással és modern kényelemmel.",
  keywords: "Balaton, apartman, luxus, nyaralás, Magyarország, tókilátás, Fonyód",
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
