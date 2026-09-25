import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";

const oswald = Oswald({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Log | Train with Intent",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.className} ${inter.className}`}>
      <body className="bg-gray-950 text-gray-50">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
