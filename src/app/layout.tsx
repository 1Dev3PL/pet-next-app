import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunitoRegular = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Next Pizza App",
  description: "Introduction to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoRegular.variable} antialiased`}>
      <main className={"min-h-screen"}>{children}</main>
      </body>
    </html>
  );
}
