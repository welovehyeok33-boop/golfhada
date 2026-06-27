import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";
import { regions } from "@/data/regions";
import { courses } from "@/data/courses";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${base}/region/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 상세 정보가 보강된 코스만 색인 대상으로 사이트맵에 포함합니다.
  const coursePages: MetadataRoute.Sitemap = courses
    .filter((c) => !c.imported)
    .map((c) => ({
      url: `${base}/course/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guide/${g.slug}`,
    lastModified: new Date(g.updatedAt ?? g.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolPages: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...regionPages, ...coursePages, ...guidePages, ...toolPages];
}
