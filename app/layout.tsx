import { RootLayout } from "@/components/layout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WelcomeMessage } from "@/components/welcome-message";
import {
  PreferenceProvider,
  ReactQueryProvider,
  SessionsProvider,
} from "@/libs/context";
import { AuthProvider } from "@/libs/context/auth";
import { RootProvider } from "@/libs/context/root";
import { cn } from "@/libs/utils/clsx";
import { GeistSans } from "geist/font/sans";
import type { Viewport } from "next";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enovato - Your Ultimate AI Chat Experience",
  description: "Chat with top LLMs in a minimal, privacy-focused UI.",
  keywords:
    "AI chat, LLM, language models, privacy, minimal UI, ollama, chatgpt",
  authors: [{ name: "Trendy design", url: "https://trendy.design" }],
  creator: "Trendy design",
  publisher: "Trendy design",
  openGraph: {
    title: "Enovato - Your Ultimate AI Chat Experience",
    siteName: "enovato.co",
    description: "Chat with top LLMs in a minimal, privacy-focused UI.",
    url: "https://enovato.co",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://enovato.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enovato - AI Micro Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enovato - Your AI-Powered Micro Learning Platform",
    site: "enovato.co",
    creator: "@enovato_co",
    description: "Learn anything with AI-powered interactive lessons and the Socratic method.",
    images: ["https://enovato.co/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://enovato.co",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ParentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.className, "antialiased", "light")}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          defer
          data-domain="enovato.co"
          src="https://plausible.io/js/script.tagged-events.js"
        ></script>
      </head>
      <body>
        <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <ReactQueryProvider>
                <AuthProvider>
                  <PreferenceProvider>
                    <SessionsProvider>
                      <RootLayout>{children}</RootLayout>
                    </SessionsProvider>
                  </PreferenceProvider>
                </AuthProvider>
              </ReactQueryProvider>
              <WelcomeMessage />
            </TooltipProvider>
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}
