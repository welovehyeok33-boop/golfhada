import Link from "next/link";
import { siteConfig } from "@/config";

const { author } = siteConfig;

/** 글 하단 등에 들어가는 저자 소개 박스 (E-E-A-T 신호). */
export default function AuthorBox({ className }: { className?: string }) {
  return (
    <aside className={`rounded-2xl border border-green-200 bg-green-50/60 p-5 sm:p-6 ${className ?? ""}`}>
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white"
          aria-hidden
        >
          준
        </div>
        <div>
          <p className="text-xs font-semibold text-green-600">이 글을 쓴 사람</p>
          <p className="mt-0.5 font-bold text-green-900">{author.name}</p>
          <p className="text-xs text-green-900/60">{author.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-green-900/80">{author.bio}</p>
          <Link
            href="/about"
            className="mt-3 inline-block text-sm font-medium text-green-600 hover:text-green-700"
          >
            운영자·사이트 소개 보기 →
          </Link>
        </div>
      </div>
    </aside>
  );
}
