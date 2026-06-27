import type { Metadata } from "next";
import Link from "next/link";
import DistanceConverter from "@/components/tools/DistanceConverter";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "비거리 환산기 — 야드·미터 변환과 클럽별 평균 비거리",
  description:
    "골프 비거리를 야드와 미터로 즉시 변환하고, 클럽별 평균 비거리표로 내 거리를 가늠해 보세요. 드라이버부터 웨지까지 한눈에.",
  alternates: { canonical: "/tools/distance" },
  openGraph: {
    title: "비거리 환산기",
    description: "야드·미터 변환과 클럽별 평균 비거리표",
    url: `${siteConfig.url}/tools/distance`,
  },
};

const clubTable: { club: string; men: string; women: string }[] = [
  { club: "드라이버", men: "200~240", women: "150~180" },
  { club: "3번 우드", men: "185~215", women: "140~165" },
  { club: "5번 우드", men: "170~200", women: "130~150" },
  { club: "4번 유틸리티", men: "170~190", women: "125~145" },
  { club: "5번 아이언", men: "155~175", women: "115~135" },
  { club: "6번 아이언", men: "145~165", women: "105~125" },
  { club: "7번 아이언", men: "135~155", women: "95~115" },
  { club: "8번 아이언", men: "120~140", women: "85~105" },
  { club: "9번 아이언", men: "110~125", women: "75~95" },
  { club: "피칭 웨지", men: "95~110", women: "60~80" },
  { club: "샌드 웨지", men: "70~90", women: "45~65" },
];

export default function DistancePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-green-900/50">
        <Link href="/" className="hover:text-green-600">홈</Link>
        <span className="mx-1.5">/</span>
        <Link href="/tools" className="hover:text-green-600">골프 계산기</Link>
        <span className="mx-1.5">/</span>
        <span className="text-green-900/80">비거리 환산기</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">비거리 환산기</h1>
        <p className="mt-3 leading-relaxed text-green-900/70">
          골프장 코스 거리는 보통 미터로 표시되지만, 골프 장비나 영상 콘텐츠에서는 야드를 쓰는 경우가 많습니다.
          두 단위를 즉시 변환하고, 아래 클럽별 평균 비거리표로 내 거리가 어느 정도인지 가늠해 보세요.
        </p>
      </header>

      <div className="mt-8">
        <DistanceConverter />
      </div>

      <AdSlot className="my-10" />

      <section className="mt-10">
        <h2 className="text-xl font-bold text-green-900">클럽별 평균 비거리 (미터 기준)</h2>
        <p className="mt-2 text-sm leading-relaxed text-green-900/70">
          아마추어 골퍼의 일반적인 캐리 거리 범위입니다. 스윙 스피드, 체격, 장비에 따라 차이가 크므로
          절대적인 기준이 아니라 참고용으로 보세요.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-green-100">
          <table className="w-full text-sm">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-2.5 text-left font-semibold">클럽</th>
                <th className="px-4 py-2.5 text-right font-semibold">남성 평균(m)</th>
                <th className="px-4 py-2.5 text-right font-semibold">여성 평균(m)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100 bg-white">
              {clubTable.map((row) => (
                <tr key={row.club}>
                  <td className="px-4 py-2.5 font-medium text-green-900">{row.club}</td>
                  <td className="px-4 py-2.5 text-right text-green-900/80">{row.men}</td>
                  <td className="px-4 py-2.5 text-right text-green-900/80">{row.women}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose-kr mt-10 space-y-6 text-green-900/80">
        <div>
          <h2 className="text-xl font-bold text-green-900">비거리를 늘리려면</h2>
          <p className="mt-2">
            비거리는 힘으로만 늘리는 것이 아닙니다. 정확한 임팩트와 스윙 스피드, 적절한 발사각이 함께 맞아야
            거리가 납니다. 무리하게 세게 휘두르기보다 일정한 템포로 클럽 중심에 정확히 맞히는 연습이 결과적으로
            더 멀리 보내는 길입니다.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-900">내 클럽별 거리를 알아두는 이유</h2>
          <p className="mt-2">
            평균표보다 중요한 것은 &lsquo;내&rsquo; 클럽별 거리입니다. 같은 7번 아이언이라도 사람마다 거리가
            다르기 때문에, 연습장에서 클럽별 실제 캐리 거리를 기록해 두면 코스에서 클럽 선택이 훨씬 쉬워지고
            스코어 관리에도 도움이 됩니다.
          </p>
        </div>
      </section>

      <div className="mt-10 rounded-xl border border-green-100 bg-white p-5">
        <p className="text-sm font-medium text-green-900">함께 보면 좋은 페이지</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/guide/golf-terms-dictionary" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            골프 용어 사전
          </Link>
          <Link href="/tools/handicap" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            핸디캡 계산기
          </Link>
          <Link href="/guide" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            골프 가이드
          </Link>
        </div>
      </div>
    </div>
  );
}
