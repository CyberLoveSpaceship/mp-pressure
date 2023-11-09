import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // can't set a `lang` on `html` here -- it'll override child layouts' lang
  // preferences
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
