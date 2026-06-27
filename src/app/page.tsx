import Link from "next/link";
import Image from "next/image";
import { regions } from "@/data/regions";
import { courses, countByRegion, getFeaturedCourses } from "@/data/courses";
import { guides } from "@/data/guides";
import RegionCard from "@/components/ui/RegionCard";
import CourseCard from "@/components/ui/CourseCard";
import GuideCard from "@/components/ui/GuideCard";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export default function Home() {
  const featured = getFeaturedCourses();

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
          <p className="text-sm font-semibold text-green-200">전국 골프장 정보 모음</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white drop-shadow sm:text-5xl">
            오늘은 어디서 라운드할까?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 drop-shadow">
            전국 골프장의 그린피, 코스 정보, 예약 팁과 주변 맛집까지 한곳에서.
            지역을 선택해 가까운 골프장부터 명문 코스까지 살펴보세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/region/gyeonggi"
              className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700"
            >
              수도권 골프장 보기
            </Link>
            <Link
              href="/region/jeju"
              className="rounded-full border border-white/70 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
            >
              제주 골프 여행
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* 지역 그리드 */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-green-900">지역별 골프장</h2>
          <p className="mt-1 text-sm text-green-900/60">
            전국 {courses.length}개 골프장 정보를 지역별로 정리했습니다.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {regions.map((r) => (
              <RegionCard key={r.slug} region={r} count={countByRegion(r.slug)} />
            ))}
          </div>
        </section>

        <AdSlot className="my-4" />

        {/* 추천 골프장 */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-green-900">이번 주 추천 골프장</h2>
          <p className="mt-1 text-sm text-green-900/60">에디터가 엄선한 가볼 만한 코스입니다.</p>
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
              <h2 className="text-xl font-bold text-green-900">골프 입문 가이드</h2>
              <p className="mt-1 text-sm text-green-900/60">처음 골프를 시작하는 분을 위한 기초 지식.</p>
            </div>
            <Link href="/guide" className="shrink-0 text-sm font-medium text-green-600 hover:text-green-700">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.slice(0, 3).map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        {/* 예약 팁 (체류시간용) */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-green-900">골프장 예약, 이것만은 알아두세요</h2>
          <div className="prose-kr mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-green-100 bg-white p-6">
              <h3 className="font-bold text-green-800">그린피는 시즌·요일에 따라 다릅니다</h3>
              <p className="mt-2 text-sm text-green-900/80">
                봄·가을 성수기와 주말은 그린피가 크게 오릅니다. 같은 코스라도 평일 새벽·오후 시간대를
                노리면 30% 이상 저렴하게 라운드할 수 있습니다.
              </p>
            </article>
            <article className="rounded-xl border border-green-100 bg-white p-6">
              <h3 className="font-bold text-green-800">대중제와 회원제의 차이</h3>
              <p className="mt-2 text-sm text-green-900/80">
                대중제(퍼블릭)는 회원권 없이 누구나 예약할 수 있고 세금 혜택으로 그린피가 낮은 편입니다.
                회원제는 코스 관리와 예약 우선권에서 강점이 있습니다.
              </p>
            </article>
            <article className="rounded-xl border border-green-100 bg-white p-6">
              <h3 className="font-bold text-green-800">부킹 성공률을 높이는 법</h3>
              <p className="mt-2 text-sm text-green-900/80">
                인기 코스는 예약 오픈 시점을 미리 확인하고, 조인·취소표 알림 서비스를 활용하면
                주말 부킹 성공률을 크게 높일 수 있습니다.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
