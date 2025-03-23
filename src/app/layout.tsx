import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const notoSans = Nunito({
  subsets: ["latin"],
  weight: [ "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MindInk",
  description:
    "Blogify is a simple blog built with Next.js and Tailwind CSS. It provides a minimalistic design and a powerful set of features to help you create a blog that is both visually appealing and easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${notoSans.className}  antialiased`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
