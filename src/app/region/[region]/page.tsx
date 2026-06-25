import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions, getRegion } from "@/data/regions";
import { getCoursesByRegion } from "@/data/courses";
import CourseCard from "@/components/ui/CourseCard";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/region/[region]">): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};

  const count = getCoursesByRegion(slug).length;
  const title = `${region.name} 골프장 정보 (${count}곳)`;
  const description = `${region.name} 지역 골프장 ${count}곳의 그린피, 코스 정보, 예약 팁을 정리했습니다. ${region.description}`;

  return {
    title,
    description,
    alternates: { canonical: `/region/${slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/region/${slug}` },
  };
}

export default async function RegionPage({
  params,
}: PageProps<"/region/[region]">) {
  const { region: slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  const list = getCoursesByRegion(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: `${region.name} 골프장`,
        item: `${siteConfig.url}/region/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10">
        <nav className="text-sm text-green-900/50">
          <Link href="/" className="hover:text-green-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-green-900/80">{region.name} 골프장</span>
        </nav>

        <header className="mt-4">
          <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">
            {region.name} 골프장
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-green-900/70">
            {region.description}
          </p>
          <p className="mt-2 text-sm font-medium text-green-600">
            총 {list.length}개 골프장
          </p>
        </header>

        {list.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-dashed border-green-200 bg-green-50/50 p-10 text-center text-green-900/50">
            등록된 골프장 정보를 준비 중입니다.
          </p>
        )}

        <AdSlot className="my-10" />

        {/* 다른 지역 */}
        <section className="mt-4">
          <h2 className="text-lg font-bold text-green-900">다른 지역 골프장</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {regions
              .filter((r) => r.slug !== slug)
              .map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/region/${r.slug}`}
                    className="rounded-full border border-green-200 px-3 py-1.5 text-sm text-green-700 hover:bg-green-50"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
}
