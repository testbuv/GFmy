import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { ThemeProvider } from "@/components/theme-provider";
import Script from 'next/script'; // Добавлен импорт Script

export const metadata: Metadata = {
  title: "Growth Fast.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`${GeistSans.className}`}>
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NTL6FKKFKC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NTL6FKKFKC');
          `}
        </Script>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ModalProvider />
          <ToasterProvider />
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
            {/* <footer className="mt-6 border-t-2 border-t-gradient-to-r border-t-fixed">
               <LandingFooter />
                </footer> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
