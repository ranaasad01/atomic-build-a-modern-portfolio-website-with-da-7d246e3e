import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Rivera — Full-Stack Developer",
  description:
    "Personal portfolio of Alex Rivera, a full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "web developer",
    "San Francisco",
  ],
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    title: "Alex Rivera — Full-Stack Developer",
    description:
      "Personal portfolio of Alex Rivera, a full-stack developer specializing in React, Next.js, and Node.js.",
    siteName: "Alex Rivera Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Rivera — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Full-Stack Developer",
    description:
      "Personal portfolio of Alex Rivera, a full-stack developer specializing in React, Next.js, and Node.js.",
    creator: "@alexrivera",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
