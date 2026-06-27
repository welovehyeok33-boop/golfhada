import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "골프 계산기 — 라운드 비용·핸디캡·비거리",
  description:
    "라운드 1인당 비용, 간이 핸디캡, 야드·미터 비거리 환산까지. 골프 라운드에 필요한 계산을 한곳에서 빠르게 해결하세요.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "골프 계산기 모음",
    description: "라운드 비용·핸디캡·비거리를 한곳에서 계산",
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
          <span className="text-green-900/80">골프 계산기</span>
        </nav>

        <header className="mt-4">
          <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">골프 계산기</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-green-900/70">
            라운드 비용부터 핸디캡, 비거리까지. 라운드를 준비하면서 자주 따져보게 되는 계산을 도구로 모았습니다.
            숫자만 넣으면 바로 결과가 나옵니다.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group flex flex-col rounded-xl border border-green-100 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
                {t.tagline}
              </span>
              <h2 className="mt-3 font-bold text-green-900 group-hover:text-green-700">{t.name}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-green-900/70">{t.description}</p>
              <span className="mt-3 text-sm font-medium text-green-600">계산하러 가기 →</span>
            </Link>
          ))}
        </div>

        <AdSlot className="my-10" />
      </div>
    </>
  );
}
