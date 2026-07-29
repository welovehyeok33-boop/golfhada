import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import GuideCard from "@/components/ui/GuideCard";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "골프 가이드 — 입문 기초부터 비즈니스·접대 라운드까지",
  description:
    "골프 시작하는 법, 용어·스코어·비용 같은 기초부터 거래처 접대 골프장 고르는 법, 접대 매너·비용 정산까지. 입문자와 비즈니스 라운드를 모두 위한 가이드를 모았습니다.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "골프 가이드 — 입문 기초부터 비즈니스·접대 라운드까지",
    description: "골프 입문 기초와 비즈니스·접대 라운드 가이드 모음",
    url: `${siteConfig.url}/guide`,
  },
};

export default function GuideIndexPage() {
  const businessGuides = guides.filter((g) => g.category === "비즈니스·접대");
  const basicGuides = guides.filter((g) => g.category !== "비즈니스·접대");

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
            골프를 처음 시작하는 분을 위한 기초 지식부터, 거래처를 모시는 비즈니스·접대 라운드 노하우까지
            정리했습니다. 궁금한 것부터 읽어보세요.
          </p>
        </header>

        <section className="mt-10">
          <div className="border-l-4 border-green-600 pl-3">
            <h2 className="text-lg font-bold text-green-900 sm:text-xl">비즈니스·접대 골프</h2>
            <p className="mt-1 text-sm text-green-900/60">
              거래처를 모시는 라운드를 직접 챙기며 정리한 노하우. 코스 선택부터 대화·비용·후속 관리까지.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        <AdSlot className="my-10" />

        <section className="mt-4">
          <div className="border-l-4 border-green-200 pl-3">
            <h2 className="text-lg font-bold text-green-900 sm:text-xl">입문·기초</h2>
            <p className="mt-1 text-sm text-green-900/60">
              골프를 처음 시작하는 분을 위한 기본기. 용어·비용·매너·장비부터 시즌 팁까지.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {basicGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
