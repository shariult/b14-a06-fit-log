import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import WorkoutProvider from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";

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
        <WorkoutProvider>
          <Navbar />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />

          <ToastContainer autoClose={1000} position="top-right" theme="dark" />
        </WorkoutProvider>
      </body>
    </html>
  );
}
