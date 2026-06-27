import type { Metadata } from "next";
import Link from "next/link";
import HandicapCalculator from "@/components/tools/HandicapCalculator";
import AdSlot from "@/components/ui/AdSlot";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "핸디캡 계산기 — 골프 스코어로 실력 가늠하기",
  description:
    "최근 라운드 스코어를 입력하면 평균 오버파 기반의 간이 핸디캡과 실력 단계를 알려드립니다. 보기 플레이어, 싱글까지 내 위치를 확인하세요.",
  alternates: { canonical: "/tools/handicap" },
  openGraph: {
    title: "핸디캡 계산기",
    description: "스코어로 간이 핸디캡과 실력 단계 확인",
    url: `${siteConfig.url}/tools/handicap`,
  },
};

export default function HandicapPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-green-900/50">
        <Link href="/" className="hover:text-green-600">홈</Link>
        <span className="mx-1.5">/</span>
        <Link href="/tools" className="hover:text-green-600">골프 계산기</Link>
        <span className="mx-1.5">/</span>
        <span className="text-green-900/80">핸디캡 계산기</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">핸디캡 계산기</h1>
        <p className="mt-3 leading-relaxed text-green-900/70">
          핸디캡은 골퍼의 실력을 숫자로 표현한 지표입니다. 최근 라운드 스코어를 넣으면 평균 오버파를 기준으로
          한 간이 핸디캡과 함께, 내가 보기 플레이어인지 싱글 핸디캐퍼인지 대략적인 실력 단계를 확인할 수
          있습니다.
        </p>
      </header>

      <div className="mt-8">
        <HandicapCalculator />
      </div>

      <AdSlot className="my-10" />

      <section className="prose-kr mt-10 space-y-6 text-green-900/80">
        <div>
          <h2 className="text-xl font-bold text-green-900">핸디캡이란 무엇인가요?</h2>
          <p className="mt-2">
            핸디캡(Handicap)은 서로 실력이 다른 골퍼들이 공정하게 경기할 수 있도록 만든 기준 점수입니다.
            쉽게 말해 &lsquo;par를 기준으로 평균 몇 타를 더 치는가&rsquo;를 나타냅니다. 핸디캡이 낮을수록
            실력이 좋다는 의미이며, 0에 가까울수록 프로에 가까운 수준입니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-900">실력 단계는 이렇게 나뉩니다</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li><strong>싱글 핸디캐퍼</strong> — 평균 오버파 9 이하. 아마추어 상위권입니다.</li>
            <li><strong>보기 플레이어</strong> — 매 홀 평균 1오버(보기) 수준, 90대 초중반 스코어입니다.</li>
            <li><strong>더블보기 플레이어</strong> — 평균 2오버 안팎, 100타 전후입니다.</li>
            <li><strong>입문·초급</strong> — 아직 100타를 넘기는 단계로, 라운드 경험을 쌓는 시기입니다.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-900">간이 핸디캡과 정식 핸디캡의 차이</h2>
          <p className="mt-2">
            이 페이지의 계산기는 최근 스코어의 평균 오버파를 이용한 간이 방식입니다. 빠르게 내 실력을 가늠하는
            데는 충분하지만, 공식 대회나 회원 관리에 쓰이는 정식 핸디캡(WHS, 세계 핸디캡 시스템)과는 산출
            방식이 다릅니다.
          </p>
          <p className="mt-2">
            정식 핸디캡은 단순 평균이 아니라 코스의 난이도를 반영합니다. 같은 90타라도 어려운 코스에서 친
            90타가 더 높게 평가되도록, 코스 레이팅과 슬로프 레이팅을 적용해 &lsquo;핸디캡 디퍼런셜&rsquo;을
            구하고, 최근 라운드 중 좋은 기록들을 골라 평균을 냅니다. 정확한 핸디캡이 필요하다면 골프협회나
            정식 핸디캡 서비스를 이용하는 것이 좋습니다.
          </p>
        </div>
      </section>

      <div className="mt-10 rounded-xl border border-green-100 bg-white p-5">
        <p className="text-sm font-medium text-green-900">함께 보면 좋은 페이지</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/guide/golf-score-par-handicap" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            스코어·파·핸디캡 가이드
          </Link>
          <Link href="/tools/round-cost" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            라운드 비용 계산기
          </Link>
          <Link href="/guide" className="rounded-full bg-green-50 px-3 py-1.5 text-green-700 hover:bg-green-100">
            골프 가이드
          </Link>
        </div>
      </div>
    </div>
  );
}
