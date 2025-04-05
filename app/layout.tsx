import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamzah's Portfolio",
  description: "by Hamzah Behery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.className} bg-white dark:bg-black/90  transition-colors`}
      >
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
