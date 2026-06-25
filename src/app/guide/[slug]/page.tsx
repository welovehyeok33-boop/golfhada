import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/data/guides";
import type { GuideBlock } from "@/types";
import GuideCard from "@/components/ui/GuideCard";
import { siteConfig } from "@/config";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guide/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guide/${slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.excerpt,
      url: `${siteConfig.url}/guide/${slug}`,
      publishedTime: guide.publishedAt,
    },
  };
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-xl font-bold text-green-900">{block.text}</h2>;
    case "p":
      return <p className="mt-4 text-green-900/80">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-green-900/80">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="mt-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4 text-sm leading-relaxed text-green-900/80">
          💡 {block.text}
        </p>
      );
    case "image":
      return (
        <figure className="mt-8">
          {block.width && block.height ? (
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full rounded-xl border border-green-100"
            />
          ) : (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-green-100">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-green-900/50">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default async function GuidePage({ params }: PageProps<"/guide/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guides.filter((g) => g.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/guide/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "골프 가이드", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${siteConfig.url}/guide/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <nav className="text-sm text-green-900/50">
          <Link href="/" className="hover:text-green-600">홈</Link>
          <span className="mx-1.5">/</span>
          <Link href="/guide" className="hover:text-green-600">골프 가이드</Link>
          <span className="mx-1.5">/</span>
          <span className="text-green-900/80">{guide.category}</span>
        </nav>

        <header className="mt-4">
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
            {guide.category}
          </span>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-green-900 sm:text-3xl">
            {guide.title}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-green-900/50">
            <time dateTime={guide.publishedAt}>{guide.publishedAt}</time>
            <span>·</span>
            <span>약 {guide.readingMinutes}분</span>
          </div>
        </header>

        {guide.coverImage && (
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-green-100">
            <Image
              src={guide.coverImage}
              alt={guide.coverAlt ?? guide.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose-kr mt-6">
          {guide.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* 디렉토리 연결 CTA (내부 링크) */}
        <section className="mt-10 rounded-xl border border-green-100 bg-green-50 p-6">
          <h2 className="text-lg font-bold text-green-900">이제 라운드 갈 골프장을 찾아볼까요?</h2>
          <p className="mt-2 text-sm text-green-900/70">
            지역별로 그린피와 코스 정보를 비교해 보세요. 입문자에게 부담 없는 대중제 골프장부터 명문 코스까지
            정리되어 있습니다.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            지역별 골프장 보기
          </Link>
        </section>
      </article>

      {/* 관련 가이드 */}
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <section className="border-t border-green-100 pt-10">
          <h2 className="text-xl font-bold text-green-900">함께 보면 좋은 가이드</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
