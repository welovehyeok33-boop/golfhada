import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "골프 준비 도구 — 체크리스트·비용·스코어·비거리",
  description:
    "첫 라운드 준비 체크리스트, 1인당 비용, 스코어 평균, 야드·미터 환산을 한곳에서 확인하세요.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "골프 준비 도구 모음",
    description: "라운드 체크리스트와 비용·스코어·비거리 계산",
    url: `${siteConfig.url}/tools`,
  },
};

export default function ToolsIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/tools/${t.slug}`,
      name: t.name,
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
          <span className="text-green-900/80">골프 준비 도구</span>
        </nav>

        <header className="mt-4">
          <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">골프 준비 도구</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-green-900/70">
            내 일정에 맞는 준비 목록부터 라운드 비용, 스코어 기록, 비거리까지.
            필요한 도구를 골라 조건을 정리하고 다음 준비로 이어가세요.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group flex flex-col rounded-xl border border-green-100 bg-cream p-5 transition hover:border-green-300 hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
                {t.tagline}
              </span>
              <h2 className="mt-3 font-bold text-green-900 group-hover:text-green-700">{t.name}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-green-900/70">{t.description}</p>
              <span className="mt-3 text-sm font-medium text-green-600">도구 사용하기 →</span>
            </Link>
          ))}
        </div>

        <AdSlot className="my-10" />
      </div>
    </>
  );
}
