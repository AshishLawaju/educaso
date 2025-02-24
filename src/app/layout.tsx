import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/common/footer/Footer";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Educaso",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={""}>
       
        <Header />
        <Navbar />


        {children}

        <Footer />
      </body>

    </html>
  );
}
