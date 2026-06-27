import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse, getCoursesByRegion } from "@/data/courses";
import { getCourseNote } from "@/data/courseNotes";
import { getRegion } from "@/data/regions";
import CourseCard from "@/components/ui/CourseCard";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/course/[slug]">): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const course = getCourse(slug);
  if (!course) return {};

  const region = getRegion(course.regionSlug);
  const title = `${course.name} - 그린피·코스 정보`;
  const description = `${region?.name} ${course.city} ${course.name} 정보. ${course.description.slice(0, 100)}`;

  return {
    title,
    description,
    alternates: { canonical: `/course/${slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/course/${slug}` },
    ...(course.imported ? { robots: { index: false, follow: true } } : {}),
  };
}

function feeText(v?: number) {
  return v ? `${v.toLocaleString()}원~` : "문의";
}

export default async function CoursePage({
  params,
}: PageProps<"/course/[slug]">) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const course = getCourse(slug);
  if (!course) notFound();

  const region = getRegion(course.regionSlug);
  const note = getCourseNote(slug);
  const related = getCoursesByRegion(course.regionSlug)
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GolfCourse",
    name: course.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: course.city,
      addressRegion: region?.name,
      addressCountry: "KR",
      streetAddress: course.address,
    },
    ...(course.phone ? { telephone: course.phone } : {}),
    ...(course.website ? { url: course.website } : {}),
    description: course.description,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: `${region?.name} 골프장`,
        item: `${siteConfig.url}/region/${course.regionSlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.name,
        item: `${siteConfig.url}/course/${slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="mx-auto max-w-4xl px-4 py-10">
        <nav className="text-sm text-green-900/50">
          <Link href="/" className="hover:text-green-600">홈</Link>
          <span className="mx-1.5">/</span>
          <Link href={`/region/${course.regionSlug}`} className="hover:text-green-600">
            {region?.name} 골프장
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-green-900/80">{course.name}</span>
        </nav>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-green-600">
            <span className="rounded-full bg-green-50 px-2.5 py-1">{region?.name}</span>
            <span className="rounded-full bg-green-50 px-2.5 py-1">{course.type}</span>
            {course.holes > 0 && (
              <span className="rounded-full bg-green-50 px-2.5 py-1">{course.holes}홀</span>
            )}
            {course.openedYear && (
              <span className="rounded-full bg-green-50 px-2.5 py-1">{course.openedYear}년 개장</span>
            )}
          </div>
          <h1 className="mt-3 text-2xl font-bold text-green-900 sm:text-3xl">{course.name}</h1>
          <p className="mt-2 text-green-900/60">{course.address}</p>
        </header>

        {/* 핵심 정보 카드 */}
        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-green-100 bg-white p-4">
            <dt className="text-xs text-green-900/50">평일 그린피</dt>
            <dd className="mt-1 font-bold text-green-800">{feeText(course.greenFeeWeekday)}</dd>
          </div>
          <div className="rounded-xl border border-green-100 bg-white p-4">
            <dt className="text-xs text-green-900/50">주말 그린피</dt>
            <dd className="mt-1 font-bold text-green-800">{feeText(course.greenFeeWeekend)}</dd>
          </div>
          <div className="rounded-xl border border-green-100 bg-white p-4">
            <dt className="text-xs text-green-900/50">홀 수</dt>
            <dd className="mt-1 font-bold text-green-800">{course.holes > 0 ? `${course.holes}홀` : "연습장"}</dd>
          </div>
          <div className="rounded-xl border border-green-100 bg-white p-4">
            <dt className="text-xs text-green-900/50">운영 형태</dt>
            <dd className="mt-1 font-bold text-green-800">{course.type}</dd>
          </div>
        </dl>

        {/* 본문 */}
        <section className="prose-kr mt-8">
          <h2 className="text-xl font-bold text-green-900">코스 소개</h2>
          <p className="mt-3 text-green-900/80">{course.description}</p>
        </section>

        {/* 에디터 노트 (큐레이션) */}
        {note && (
          <section className="mt-8 rounded-2xl border border-green-200 bg-green-50/60 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-green-600 px-2.5 py-1 text-xs font-semibold text-white">
                에디터 노트
              </span>
              <span className="text-xs text-green-900/50">골프하다가 직접 정리한 한 줄 메모</span>
            </div>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-bold text-green-800">이런 분께 추천</dt>
                <dd className="mt-1 text-green-900/80">{note.recommendedFor}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-green-800">코스 공략 한 줄</dt>
                <dd className="mt-1 text-green-900/80">{note.playTip}</dd>
              </div>
            </dl>
          </section>
        )}

        {/* 비즈니스·접대 관점 (준pro의 시선) */}
        {note?.business && (
          <section className="mt-8 rounded-2xl border border-green-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-green-800 px-2.5 py-1 text-xs font-semibold text-white">
                비즈니스 라운드 시선
              </span>
              <span className="text-xs text-green-900/50">접대·거래처 라운드 관점에서 본 장단점</span>
            </div>
            <p className="mt-4 font-medium text-green-900">{note.business.summary}</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-green-50/70 p-4">
                <p className="text-sm font-bold text-green-700">접대 관점의 장점</p>
                <ul className="mt-2 space-y-2">
                  {note.business.pros.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-green-900/80">
                      <span aria-hidden className="mt-0.5 shrink-0 font-bold text-green-600">＋</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-amber-50/70 p-4">
                <p className="text-sm font-bold text-amber-700">미리 알아둘 점</p>
                <ul className="mt-2 space-y-2">
                  {note.business.cons.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-green-900/80">
                      <span aria-hidden className="mt-0.5 shrink-0 font-bold text-amber-600">－</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-green-900/50">
              운영자 {siteConfig.author.name}가 비즈니스 라운드 경험을 토대로 정리한 의견이며, 실제 분위기는
              시즌·동반자·티타임에 따라 다를 수 있습니다.
            </p>
          </section>
        )}

        {/* 특징 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-green-900">특징</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {course.features.map((f) => (
              <li key={f} className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                {f}
              </li>
            ))}
          </ul>
        </section>

        <AdSlot className="my-10" />

        {/* 주변 */}
        {course.nearby && course.nearby.length > 0 && (
          <section className="mt-2">
            <h2 className="text-xl font-bold text-green-900">주변 가볼 만한 곳</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {course.nearby.map((n) => (
                <li key={n} className="rounded-lg border border-green-100 bg-white px-4 py-3 text-sm text-green-900/80">
                  {n}
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-8 rounded-lg bg-green-50 p-4 text-xs leading-relaxed text-green-900/60">
          ※ 그린피 등 게재 정보는 참고용이며 시즌·요일·시간대에 따라 달라집니다. 예약 전 골프장 공식 채널에서
          최신 정보를 확인하세요.
          {course.imported &&
            " 본 코스의 기본 정보는 문화체육관광부 「전국 골프장 현황」(2024-12-31) 공공데이터를 바탕으로 하며, 상세 정보는 순차적으로 보강하고 있습니다."}
        </p>

        {/* 같은 지역 */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-green-900">{region?.name} 다른 골프장</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
