import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://links.gardenbrows.com.br"),
  title: "Studio Garden Brows",
  description: "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios.",
  openGraph: {
    title: "Studio Garden Brows",
    description: "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios",
    url: `https://links.gardenbrows.com.br`,
    siteName: "Studio Garden Brows",
    images: [{ url: "https://links.gardenbrows.com.br/Logo.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} antialiased w-full bg-[url('/background_mobile.png')] lg:bg-[url('/background.png')] bg-center bg-cover bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
