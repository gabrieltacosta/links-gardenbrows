import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Links - Studio Garde Brows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased w-full min-h-screen bg-[url('/background_mobile.png')] lg:bg-[url('/background.png')] bg-top bg-cover bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
