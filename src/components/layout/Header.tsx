import Link from "next/link";
import { regions } from "@/data/regions";
import { countByRegion } from "@/data/courses";
import Logo from "@/components/ui/Logo";

// 노출 중인 코스가 있는 지역만 (빈 "준비 중" 페이지 링크 방지 + 메뉴 과밀 완화)
const fadeMask = {
  maskImage: "linear-gradient(to right, #000 90%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, #000 90%, transparent)",
};

export default function Header() {
  const navRegions = regions.filter((r) => countByRegion(r.slug) > 0);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo className="shrink-0" />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-3 text-sm text-green-900">
            {navRegions.slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link href={`/region/${r.slug}`} className="hover:text-green-600">
                  {r.shortName}
                </Link>
              </li>
            ))}
            <li aria-hidden className="text-green-200">|</li>
            <li>
              <Link href="/tools" className="font-semibold text-green-700 hover:text-green-600">
                계산기
              </Link>
            </li>
            <li>
              <Link href="/guide" className="font-semibold text-green-700 hover:text-green-600">
                가이드
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/tools" className="text-sm font-medium text-green-700 hover:text-green-600 md:hidden">
            계산기
          </Link>
          <Link href="/guide" className="text-sm font-medium text-green-700 hover:text-green-600 md:hidden">
            가이드
          </Link>
          <Link
            href="/about"
            className="rounded-full bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700"
          >
            소개
          </Link>
        </div>
      </div>

      <div className="border-t border-green-50 md:hidden">
        <ul
          className="flex gap-x-4 overflow-x-auto px-4 py-2 text-sm text-green-900 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={fadeMask}
        >
          {navRegions.map((r) => (
            <li key={r.slug} className="shrink-0">
              <Link href={`/region/${r.slug}`} className="hover:text-green-600">
                {r.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
