import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Navigation from '@/app/ui/navigation';

const hedvigLettersSerif = Hedvig_Letters_Serif({
  varialbe: "--font-hedvig-letters-serif",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hedvigLettersSerif.className} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
