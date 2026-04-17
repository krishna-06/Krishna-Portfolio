import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Lora, DM_Sans } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krishna-portfolio-topaz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sai Krishna | Senior Full Stack .NET Developer",
  description:
    "Results-driven Senior Full Stack .NET Developer with 10 years of experience across healthcare, financial services, government, and telecom domains.",
  keywords: [
    "Sai Krishna",
    "Senior Full Stack .NET Developer",
    "ASP.NET Core Web API",
    "Angular",
    "React",
    "Blazor",
    "Azure",
    "AWS",
    "Microservices",
    "Event-Driven Architecture",
  ],
  openGraph: {
    title: "Sai Krishna | Senior Full Stack .NET Developer",
    description:
      "10 years building scalable enterprise applications with .NET, Angular/React, Azure, and AWS.",
    url: siteUrl,
    siteName: "Sai Krishna",
    type: "website",
    images: [
      {
        url: "/images/profile/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Sai Krishna | Senior Full Stack .NET Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Krishna | Senior Full Stack .NET Developer",
    description:
      "10 years building scalable enterprise applications with .NET, Angular/React, Azure, and AWS.",
    images: ["/images/profile/profile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}