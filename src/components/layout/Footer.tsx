import Link from "next/link";
import { regions } from "@/data/regions";
import { siteConfig } from "@/config";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-100 bg-green-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-2 text-sm leading-relaxed text-green-900/80">
              전국 골프장 정보를 지역별로 정리합니다. 그린피·코스 정보와 예약 팁을 한곳에서 확인하세요.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-green-800">지역별 골프장</h3>
            <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-green-900/80">
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link href={`/region/${r.slug}`} className="hover:text-green-600">
                    {r.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-green-800">사이트 정보</h3>
            <ul className="mt-3 space-y-1 text-sm text-green-900/80">
              <li><Link href="/guide" className="hover:text-green-600">골프 가이드</Link></li>
              <li><Link href="/about" className="hover:text-green-600">사이트 소개</Link></li>
              <li><Link href="/contact" className="hover:text-green-600">문의하기</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-green-600">개인정보처리방침</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-green-800">문의</h3>
            <p className="mt-3 text-sm text-green-900/80">{siteConfig.contactEmail}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-green-200 pt-6 text-xs leading-relaxed text-green-900/60">
          <p>
            본 사이트에 게재된 그린피·연락처 등의 정보는 참고용이며 실제와 다를 수 있습니다. 예약 및 이용 전 각 골프장
            공식 채널에서 반드시 확인하시기 바랍니다.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
