import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mohsinjaved.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohsin Javed — Software Engineer",
  description:
    "Full-stack software engineer specializing in React.js, Next.js, Nest.js, and PostgreSQL — building production web applications for order management, point-of-sale, and government benefits platforms.",
  keywords: [
    "Mohsin Javed",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Nest.js",
    "Portfolio",
  ],
  authors: [{ name: "Mohsin Javed" }],
  openGraph: {
    title: "Mohsin Javed — Software Engineer",
    description:
      "Full-stack software engineer specializing in React.js, Next.js, Nest.js, and PostgreSQL.",
    url: siteUrl,
    siteName: "Mohsin Javed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Javed — Software Engineer",
    description:
      "Full-stack software engineer specializing in React.js, Next.js, Nest.js, and PostgreSQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
