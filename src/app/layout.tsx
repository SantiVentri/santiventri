import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/footer";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, I´m Santino Ventrice | Web and mobile developer",
  description: "Welcome to my portfolio, my name is Santino Ventrice and I enjoy designing and developing websites and mobile apps for businesses and create an impact on their brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
