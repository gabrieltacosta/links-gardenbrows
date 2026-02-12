import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio Garden Brows",
    short_name: "Studio Garden Brows",
    description:
      "Links oficiais do Studio Garden Brows. Acesse o e-book O Valor Que Comunica e fique por dentro das novidades de design de sobrancelhas e cílios.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f4f5",
    theme_color: "#3F4D3B",
    icons: [
      {
        src: "/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}