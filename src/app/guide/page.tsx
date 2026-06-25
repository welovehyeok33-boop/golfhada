import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import GuideCard from "@/components/ui/GuideCard";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "골프 가이드 — 입문자를 위한 기초 지식",
  description:
    "골프 시작하는 법, 용어 정리, 스코어 보는 법, 입문 비용까지. 처음 골프를 접하는 분을 위한 기초 가이드를 모았습니다.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "골프 가이드 — 입문자를 위한 기초 지식",
    description: "골프 입문자를 위한 기초 가이드 모음",
    url: `${siteConfig.url}/guide`,
  },
};

export default function GuideIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: guides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/guide/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10">
        <nav className="text-sm text-green-900/50">
          <Link href="/" className="hover:text-green-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-green-900/80">골프 가이드</span>
        </nav>

        <header className="mt-4">
          <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">골프 가이드</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-green-900/70">
            골프를 처음 시작하는 분을 위한 기초 지식을 정리했습니다. 시작하는 법부터 용어, 스코어, 비용까지
            궁금한 것부터 읽어보세요.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>

        <AdSlot className="my-10" />
      </div>
    </>
  );
}
