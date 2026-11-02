import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";

import { site } from "@/content/site";
import { AnimationProvider } from "@/lib/animation";
import { Header } from "@/app/components/header/Header";
import { Footer } from "@/app/components/footer/Footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.greeting,
  // placeholder stays out of search; next.config.ts sends the same rule as a header
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noarchive: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} ${montserrat.variable} antialiased`}>
      <body>
        <AnimationProvider>
          <Header />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
