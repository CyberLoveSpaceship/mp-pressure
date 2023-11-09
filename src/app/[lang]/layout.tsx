// import { Inter } from "next/font/google";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { l, type Params } from "~/locale";

import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata({
  params: { lang },
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: l(lang, "title"),
    description: l(lang, "description"),
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return (
    <html lang={lang}>
      <body>
        <div className="m-auto max-w-[var(--content-max-width)] flex flex-col min-h-full">
          <header className="flex-grow">
            <Header lang={lang} />
          </header>
          <main className="flex-grow-0">{children}</main>
          <footer className="flex-grow">
            <Footer lang={lang} />
          </footer>
        </div>
      </body>
    </html>
  );
}
