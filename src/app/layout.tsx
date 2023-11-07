// import { Inter } from "next/font/google";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

import "./globals.css";

import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MP Pressure",
  description: "Tool for contacting your MPs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="m-auto max-w-[var(--content-max-width)] flex flex-col min-h-full">
          <header className="flex-grow">
            <Header />
          </header>
          <main className="flex-grow-0">{children}</main>
          <footer className="flex-grow">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
