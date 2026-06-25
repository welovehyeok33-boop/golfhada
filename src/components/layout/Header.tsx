import Link from "next/link";
import { regions } from "@/data/regions";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo className="shrink-0" />

        <nav className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-green-900">
            {regions.slice(0, 7).map((r) => (
              <li key={r.slug}>
                <Link href={`/region/${r.slug}`} className="hover:text-green-600">
                  {r.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guide" className="font-semibold text-green-700 hover:text-green-600">
                가이드
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
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
        <ul className="flex gap-x-3 overflow-x-auto px-4 py-2 text-sm text-green-900">
          {regions.map((r) => (
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
