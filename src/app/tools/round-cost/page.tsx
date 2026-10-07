import type { Metadata } from "next";
import Link from "next/link";
import RoundCostCalculator from "@/components/tools/RoundCostCalculator";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "라운드 비용 계산기 — 골프 1인당 비용 계산",
  description:
    "개인 그린피·식사비와 팀 카트비·캐디피·공동 교통비를 구분해 인원별 라운드 비용과 공유용 정산표를 만듭니다.",
  alternates: { canonical: "/tools/round-cost" },
  openGraph: {
    title: "라운드 비용 계산기",
    description: "개인 비용과 팀 공통 비용을 구분하는 라운드 정산표",
    url: `${siteConfig.url}/tools/round-cost`,
  },
};

export default function RoundCostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-green-900/50">
        <Link href="/" className="hover:text-green-600">홈</Link>
        <span className="mx-1.5">/</span>
        <Link href="/tools" className="hover:text-green-600">골프 계산기</Link>
        <span className="mx-1.5">/</span>
        <span className="text-green-900/80">라운드 비용 계산기</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">라운드 비용 계산기</h1>
        <p className="mt-3 leading-relaxed text-green-900/70">
          골프 한 번 치는 데 드는 돈은 그린피만이 전부가 아닙니다. 카트비와 캐디피가 더해지고, 라운드 후
          식사까지 하면 처음 예상한 금액을 훌쩍 넘기기 쉽습니다. 항목별 금액과 인원을 넣으면 1인당 실제로
          얼마가 드는지 바로 확인할 수 있습니다.
        </p>
      </header>

      <div className="mt-8">
        <RoundCostCalculator />
      </div>

      <AdSlot className="my-10" />

      <section className="prose-kr mt-10 space-y-6 text-green-900/80">
        <div>
          <h2 className="text-xl font-bold text-green-900">라운드 비용은 크게 네 가지로 나뉩니다</h2>
          <p className="mt-2">
            국내 골프장에서 라운드를 할 때 드는 비용은 보통 그린피, 카트비, 캐디피, 식사·부대비용으로
            구성됩니다. 이 가운데 카트비와 캐디피는 개인이 아니라 팀 단위로 부과되기 때문에, 같은 코스라도
            몇 명이 함께 치느냐에 따라 1인당 부담이 크게 달라집니다.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-green-800">그린피</h3>
          <p className="mt-2">
            코스 사용료입니다. 회원제·대중제 여부, 시즌, 요일, 시간대에 따라 차이가 가장 큰 항목입니다. 봄·가을
            주말 프라임 시간대가 가장 비싸고, 평일 새벽이나 늦은 오후 티타임이 저렴한 편입니다.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-green-800">카트비</h3>
          <p className="mt-2">
            카트 이용 방식과 부과 단위는 골프장 안내를 확인해야 합니다. 팀당 같은 금액을 나눈다는 조건에서
            4명의 1인 부담액은 2명일 때의 절반입니다. 2인 플레이 추가 요금이나 필수 인원 조건이 있으면 별도로 반영하세요.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-green-800">캐디피</h3>
          <p className="mt-2">
            캐디 동반 여부, 팀 요금과 지급 방법은 코스별로 확인하세요. 셀프 라운드가 가능한지,
            캐디 선택에 따라 예약 조건이 달라지는지도 함께 확인해야 합니다. 계산기에는 안내받은 팀 전체 금액을 입력합니다.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-green-800">식사·부대비용</h3>
          <p className="mt-2">
            라운드 중간 그늘집 간식이나 라운드 후 식사 비용입니다. 골프장 식음료는 시중보다 비싼 편이라
            예산을 따로 잡아두는 편이 안전합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-900">비용을 줄이는 현실적인 방법</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>인원을 4명으로 채워 카트비·캐디피 분담을 최대화합니다.</li>
            <li>평일·비수기·새벽 또는 오후 티타임을 노립니다.</li>
            <li>노캐디(셀프) 또는 캐디 선택제를 운영하는 대중제 코스를 찾습니다.</li>
            <li>그늘집·식사는 미리 예산을 정해두고 움직입니다.</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 rounded-xl border border-green-100 bg-cream p-5">
        <p className="text-sm font-medium text-green-900">함께 보면 좋은 페이지</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/guide" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            골프 가이드
          </Link>
          <Link href="/tools/handicap" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            스코어 평균 계산기
          </Link>
          <Link href="/" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            지역별 골프장 찾기
          </Link>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-green-900/50">
        ※ 입력 기본값은 계산 방법을 보여주는 임의의 예시이며, 실제 금액은 골프장·시즌·시간대에 따라 다릅니다.
        예약 전 각 골프장 공식 채널에서 최신 요금을 확인하세요.
      </p>
    </div>
  );
}
