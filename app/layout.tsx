import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { PortfolioHeader } from "@/components/layout/PortfolioHeader";
import { ContactSection } from "@/components/layout/ContactSection";
import { WelcomeGreeting } from "@/components/ui/WelcomeGreeting";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Emmanuel — Product-minded Software Engineer",
  description:
    "Building useful things. Growing with intention. A portfolio of products, engineering, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[100px] motion-reduce:scroll-auto">
      <body
        className={`${dmSans.variable} ${cormorant.variable} bg-paper font-sans text-[15px] leading-[1.65] text-navy antialiased selection:bg-[#c9e7fa] selection:text-navy [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-blue-deep [&_button]:cursor-pointer motion-reduce:[&_*]:transition-none motion-reduce:[&_*]:animate-none`}
      >
        <PortfolioHeader />
        {children}
        <ContactSection />
        <WelcomeGreeting />
      </body>
    </html>
  );
}
