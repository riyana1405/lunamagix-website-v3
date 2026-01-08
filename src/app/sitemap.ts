import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lunamagix.app";

  const staticPages = [
    { url: "", priority: 1, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/partner", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/assessment", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/accessibility", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const productPages = [
    { url: "/products", priority: 0.9 },
    { url: "/products/education/lunalearn", priority: 0.9 },
    { url: "/products/education/lunaviz", priority: 0.8 },
    { url: "/products/education/lunawatch", priority: 0.8 },
    { url: "/products/education/lunafit", priority: 0.8 },
    { url: "/products/education/lunasense", priority: 0.8 },
    { url: "/products/assistive/lunaguide", priority: 0.8 },
    { url: "/products/assistive/lunamove", priority: 0.8 },
    { url: "/products/assistive/lunasound", priority: 0.8 },
    { url: "/products/healthcare/lunacare", priority: 0.8 },
    { url: "/products/healthcare/lunascan", priority: 0.8 },
    { url: "/products/healthcare/lunascribe", priority: 0.8 },
  ];

  const solutionPages = [
    { url: "/solutions/schools", priority: 0.7 },
    { url: "/solutions/special-education", priority: 0.7 },
    { url: "/solutions/coaching", priority: 0.7 },
    { url: "/solutions/healthcare", priority: 0.7 },
    { url: "/solutions/parents", priority: 0.7 },
    { url: "/solutions/sports", priority: 0.7 },
  ];

  const resourcePages = [
    { url: "/resources/blog", priority: 0.6 },
    { url: "/resources/whitepapers", priority: 0.6 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...productPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...solutionPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...resourcePages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
  ];
}
