import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "auto",
});

const siteUrl = "https://links.gardenbrows.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Studio Garden Brows",
  description:
    "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios.",
  openGraph: {
    title: "Studio Garden Brows",
    description:
      "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios",
<<<<<<< HEAD
    url: siteUrl,
=======
    url: `https://links.gardenbrows.com.br`,
>>>>>>> 20f8837 (update)
    siteName: "Studio Garden Brows",
    images: [{ url: `${siteUrl}/Logo.png` }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Garden Brows",
    description:
      "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios.",
    images: [`https://links.gardenbrows.com.br/Logo.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Garden Brows",
    description:
      "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios.",
    images: [`${siteUrl}/Logo.png`],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: `${siteUrl}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${roboto.className} antialiased w-full bg-[url('/background_mobile.png')] lg:bg-[url('/background.png')] bg-center bg-cover bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
