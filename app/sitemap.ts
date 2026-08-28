import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { years } from "@/data/years";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/lecturers", "/portals", "/portals/mnu", "/portals/mohe", "/about", "/archive"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...years.map((y) => ({
      url: `${site.url}/years/${y.year}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/posts/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
