import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

export const metadata: Metadata = {
  title: "Big Way Umrah - Best Travel Agency",
  description: "Experience a seamless spiritual journey with our premium Umrah packages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        </body>
    </html>
  );
}