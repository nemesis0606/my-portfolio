import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffect from "@/components/BackgroundEffect";
import { personalInfo } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | Portfolio`,
  description: `${personalInfo.name} - ${personalInfo.title}. ${personalInfo.subtitle}`,
  keywords: [
    "Portfolio",
    "Creative Developer",
    "Data Engineer",
    "Next.js",
    "React",
    "Apache Spark",
    "Databricks",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-accent-purple/20 selection:text-foreground">
        <ThemeProvider>
          <BackgroundEffect />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

