import type { Metadata } from "next";
import Link from "next/link";
import DistanceConverter from "@/components/tools/DistanceConverter";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "비거리 환산기 — 야드·미터 단위 변환",
  description:
    "골프 비거리를 야드와 미터로 즉시 변환하고, 캐리와 총거리를 구분하고 자신의 측정 기록을 비교하세요.",
  alternates: { canonical: "/tools/distance" },
  openGraph: {
    title: "비거리 환산기",
    description: "야드·미터 단위 변환표",
    url: `${siteConfig.url}/tools/distance`,
  },
};


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
          두 단위를 변환한 뒤 코스 표지판과 거리 측정기에 사용된 단위가 같은지 확인하세요.
        </p>
      </header>

      <div className="mt-8">
        <DistanceConverter />
      </div>

      <AdSlot className="my-10" />

      <section className="prose-kr mt-10 text-green-900/80"><h2 className="text-xl font-bold">캐리와 총거리를 구분하세요</h2><p className="mt-3">캐리는 공이 공중으로 날아가 처음 땅에 닿기까지의 거리이고, 총거리는 이후 굴러간 거리까지 포함합니다. 해저드 앞에서는 캐리, 멈춰야 하는 지점에서는 총거리도 함께 고려해야 합니다. 서로 다른 측정 기준을 섞어 비교하지 마세요.</p><p className="mt-4">클럽 번호만으로 거리를 정할 수 없습니다. 같은 클럽으로 여러 번 친 기록에서 일반적으로 나오는 캐리와 좌우 오차를 기록해 보세요. 가장 멀리 친 한 번을 기준으로 클럽을 고르면 장애물을 넘기지 못할 수 있습니다.</p></section>

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

      <div className="mt-10 rounded-xl border border-green-100 bg-cream p-5">
        <p className="text-sm font-medium text-green-900">함께 보면 좋은 페이지</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/guide/golf-terms-dictionary" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            골프 용어 사전
          </Link>
          <Link href="/tools/handicap" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            스코어 평균 계산기
          </Link>
          <Link href="/guide" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            골프 가이드
          </Link>
        </div>
      </div>
    </div>
  );
}
