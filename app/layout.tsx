import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata: Metadata = {
  title: "Printifai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider />
          <ToasterProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
