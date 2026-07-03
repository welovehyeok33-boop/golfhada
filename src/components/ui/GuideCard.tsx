import Link from "next/link";
import Image from "next/image";
import type { GuideArticle } from "@/types";

export default function GuideCard({ guide }: { guide: GuideArticle }) {
  return (
    <Link
      href={`/guide/${guide.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-green-100 bg-cream transition hover:border-green-300 hover:shadow-md"
    >
      {guide.coverImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={guide.coverImage}
            alt={guide.coverAlt ?? guide.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
      <span className="w-fit rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
        {guide.category}
      </span>
      <h3 className="mt-3 text-lg font-bold leading-snug text-green-900 group-hover:text-green-600">
        {guide.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-green-900/70">
        {guide.excerpt}
      </p>
      <span className="mt-4 text-xs text-green-900/50">읽는 데 약 {guide.readingMinutes}분</span>
      </div>
    </Link>
  );
}
