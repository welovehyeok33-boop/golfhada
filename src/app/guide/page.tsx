import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import GuideExplorer from "@/components/ui/GuideExplorer";
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
  const summaries = guides.map(({ slug, title, excerpt, category, readingMinutes, coverImage, coverAlt }) => ({ slug, title, excerpt, category, readingMinutes, coverImage, coverAlt }));

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

        <div className="mt-6 grid gap-3 sm:grid-cols-3" aria-label="처음 읽을 가이드">
          {[{ href: "/guide/golf-round-day-flow", title: "첫 필드가 예정돼 있다면", text: "도착부터 정산까지 흐름 잡기" }, { href: "/guide/golf-booking-tips", title: "이번 주 예약을 맡았다면", text: "인원·티타임·취소 조건 확인" }, { href: "/guide/business-golf-cost-settlement", title: "비용을 나눠야 한다면", text: "개인 비용과 팀 비용 구분" }].map((item) => <Link key={item.href} href={item.href} className="rounded-xl border border-green-200 bg-cream p-5 hover:border-green-400"><h2 className="font-bold text-green-900">{item.title} ↗</h2><p className="mt-2 text-sm text-green-900/65">{item.text}</p></Link>)}
        </div>
        <GuideExplorer guides={summaries} />
      </div>
    </>
  );
}
