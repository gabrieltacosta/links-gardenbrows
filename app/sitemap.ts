export default async function sitemap() {
  const siteUrl = "https://links.gardenbrows.com.br";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "month" as const,
      priority: 1,
    },
  ];
}
