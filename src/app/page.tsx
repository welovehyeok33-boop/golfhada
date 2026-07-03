import Link from "next/link";
import Image from "next/image";
import { regions } from "@/data/regions";
import { listedCourses, countByRegion, getFeaturedCourses } from "@/data/courses";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import RegionCard from "@/components/ui/RegionCard";
import CourseCard from "@/components/ui/CourseCard";
import GuideCard from "@/components/ui/GuideCard";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export default function Home() {
  const featured = getFeaturedCourses();
  const listedRegions = regions.filter((r) => countByRegion(r.slug) > 0);
  const businessGuides = guides.filter((g) => g.category === "비즈니스·접대");
  const featuredGuides = [
    ...businessGuides,
    ...guides.filter((g) => g.category !== "비즈니스·접대"),
  ].slice(0, 3);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: featured.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/course/${c.slug}`,
      name: c.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="새벽 안개가 내린 골프장 페어웨이와 벙커 전경"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <p className="text-sm font-semibold text-green-200">비즈니스·접대 골프장 가이드</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white drop-shadow sm:text-5xl">
            이번엔 어디로 모실까?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 drop-shadow">
            거래처를 모시는 라운드는 코스 평점만으로 고를 수 없습니다. 접대하기 좋은지, 격식과 접근성은 어떤지 —
            전국 골프장을 비즈니스 라운드의 시선으로 정리했습니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/region/gyeonggi"
              className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700"
            >
              수도권 골프장 보기
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/70 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
            >
              운영자 소개
            </Link>
          </div>
        </div>
      </section>

      {/* 숫자 띠 */}
      <section className="border-b border-green-100 bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-green-100 px-4">
          <div className="py-6 text-center">
            <div className="text-2xl font-bold text-green-700 sm:text-3xl">{listedCourses.length}</div>
            <div className="mt-1 text-xs text-green-900/60 sm:text-sm">전국 골프장</div>
          </div>
          <div className="py-6 text-center">
            <div className="text-2xl font-bold text-green-700 sm:text-3xl">{guides.length}</div>
            <div className="mt-1 text-xs text-green-900/60 sm:text-sm">골프 가이드</div>
          </div>
          <div className="py-6 text-center">
            <div className="text-2xl font-bold text-green-700 sm:text-3xl">{tools.length}</div>
            <div className="mt-1 text-xs text-green-900/60 sm:text-sm">골프 계산기</div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* 지역 그리드 */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-green-900">지역별 골프장</h2>
          <p className="mt-1 text-sm text-green-900/60">
            거래처 위치에 맞춰 모시기 좋은 지역부터 골라보세요. 전국 {listedCourses.length}개 골프장을 정리했습니다.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {listedRegions.map((r) => (
              <RegionCard key={r.slug} region={r} count={countByRegion(r.slug)} />
            ))}
          </div>
        </section>

        <AdSlot className="my-4" />

        {/* 추천 골프장 */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-green-900">접대하기 좋은 추천 코스</h2>
          <p className="mt-1 text-sm text-green-900/60">
            운영자 {siteConfig.author.name}가 비즈니스 라운드 시선으로 골랐습니다. 상세 페이지에 코스별 접대 장단점을
            정리해 뒀어요.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </section>

        {/* 골프 가이드 */}
        <section className="py-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-900">비즈니스·접대 골프 가이드</h2>
              <p className="mt-1 text-sm text-green-900/60">
                거래처를 모실 때 알아두면 좋은 노하우. 입문 기초 가이드도 함께 정리했습니다.
              </p>
            </div>
            <Link href="/guide" className="shrink-0 text-sm font-medium text-green-600 hover:text-green-700">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        {/* 골프 계산기 */}
        <section className="py-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-900">골프 계산기</h2>
              <p className="mt-1 text-sm text-green-900/60">라운드 비용·핸디캡·비거리를 바로 계산해 보세요.</p>
            </div>
            <Link href="/tools" className="shrink-0 text-sm font-medium text-green-600 hover:text-green-700">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group flex flex-col rounded-xl border border-green-100 bg-cream p-5 transition hover:border-green-300 hover:shadow-md"
              >
                <span className="w-fit rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
                  {t.tagline}
                </span>
                <h3 className="mt-3 font-bold text-green-900 group-hover:text-green-700">{t.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-green-900/70">{t.description}</p>
                <span className="mt-3 text-sm font-medium text-green-600">계산하러 가기 →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* 예약 팁 (체류시간용) — 진한 그린 밴드 */}
      <section className="mt-4 bg-green-700">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-xl font-bold text-white">접대 라운드, 이것만은 챙기세요</h2>
          <p className="mt-1 text-sm text-green-100/80">코스 실력보다 중요한 건, 모시는 사람이 편한가입니다.</p>
          <div className="prose-kr mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white">코스보다 격식과 접근성</h3>
              <p className="mt-2 text-sm text-green-50/90">
                중요한 거래처일수록 화려한 코스보다 클럽하우스 격식, 식사 수준, 회사에서의 거리를 먼저 봅니다.
                모시는 분이 부담 없이 도착할 수 있는지가 첫 기준입니다.
              </p>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white">동반자 구력에 코스를 맞추세요</h3>
              <p className="mt-2 text-sm text-green-50/90">
                페어웨이가 좁고 난도 높은 코스는 구력이 짧은 동반자를 지치게 합니다. 접대 자리라면 무리 없이
                즐길 수 있는 평탄하고 넉넉한 코스가 분위기를 살립니다.
              </p>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white">회원제·대중제 구분은 부킹 전략</h3>
              <p className="mt-2 text-sm text-green-50/90">
                격식이 필요하면 회원제, 비회원 동반과 일정 유연성이 필요하면 대중제가 유리합니다. 자리의 성격에
                맞춰 코스 유형부터 정하면 실패가 줄어듭니다.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
