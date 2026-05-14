import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Claren — Visual intelligence for litigation",
  description:
    "Claren helps lawyers and law students understand cases, evidence, timelines, and legal procedures visually. Open source litigation intelligence.",
  openGraph: {
    title: "Claren — Visual intelligence for litigation",
    description:
      "Understand law visually. Open source litigation intelligence platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
