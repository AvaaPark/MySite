'use client'

import { Hedvig_Letters_Serif, Roboto, Inter, Hanken_Grotesk, Roboto_Flex, Noto_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navigation from '@/app/ui/navigation';

const hedvigLettersSerif = Hedvig_Letters_Serif({
  varialbe: "--font-hedvig-letters-serif",
  subsets: ["latin"]
});

export const roboto = Roboto({
  varialbe: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export const inter = Inter({
  varialbe: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"]
});

export const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"]
});

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html lang="en">
      <body
        className={`${hedvigLettersSerif.className} antialiased`}
      >
        {
          !path.startsWith('/fun/') ?
            <Navigation /> : <></>

        }
        {children}
      </body>
    </html>
  );
}
