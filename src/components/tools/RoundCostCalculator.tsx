"use client";

import { useState } from "react";

const won = (n: number) => n.toLocaleString("ko-KR") + "원";

export default function RoundCostCalculator() {
  // 1인 기준 항목
  const [greenFee, setGreenFee] = useState(150000); // 1인 그린피
  const [meal, setMeal] = useState(15000); // 1인 식사/기타
  // 팀(예약 단위) 기준 항목 — 인원으로 나눔
  const [cart, setCart] = useState(100000); // 팀 카트비
  const [caddie, setCaddie] = useState(150000); // 팀 캐디피
  const [people, setPeople] = useState(4);

  const perTeamShared = cart + caddie; // 팀이 나눠 내는 금액
  const perPersonShared = people > 0 ? Math.round(perTeamShared / people) : 0;
  const perPerson = greenFee + meal + perPersonShared;
  const total = perPerson * people;

  const rows = [
    { label: "그린피 (1인)", value: greenFee, set: setGreenFee, step: 10000, hint: "1인당 금액" },
    { label: "카트비 (팀 전체)", value: cart, set: setCart, step: 10000, hint: "인원수로 나눔" },
    { label: "캐디피 (팀 전체)", value: caddie, set: setCaddie, step: 10000, hint: "인원수로 나눔" },
    { label: "식사·기타 (1인)", value: meal, set: setMeal, step: 5000, hint: "그늘집·식사 등" },
  ];

  return (
    <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between text-sm font-medium text-green-900">
              <span>{r.label}</span>
              <span className="text-xs font-normal text-green-900/40">{r.hint}</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => r.set(Math.max(0, r.value - r.step))}
                className="h-9 w-9 shrink-0 rounded-lg border border-green-200 text-green-700 hover:bg-green-50"
                aria-label={`${r.label} 줄이기`}
              >
                −
              </button>
              <div className="relative flex-1">
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={r.step}
                  value={r.value}
                  onChange={(e) => r.set(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full rounded-lg border border-green-200 bg-green-50/40 py-2 pl-3 pr-8 text-right font-semibold text-green-900 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-green-900/40">
                  원
                </span>
              </div>
              <button
                type="button"
                onClick={() => r.set(r.value + r.step)}
                className="h-9 w-9 shrink-0 rounded-lg border border-green-200 text-green-700 hover:bg-green-50"
                aria-label={`${r.label} 늘리기`}
              >
                +
              </button>
            </div>
          </div>
        ))}

        {/* 인원 */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-green-900">인원</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPeople(n)}
                className={`flex-1 rounded-lg border py-2 text-sm font-semibold transition ${
                  people === n
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-green-200 text-green-700 hover:bg-green-50"
                }`}
              >
                {n}명
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      <div className="mt-6 rounded-xl bg-green-700 p-5 text-white">
        <div className="flex items-end justify-between">
          <span className="text-sm text-green-100/90">1인당 예상 비용</span>
          <span className="text-2xl font-bold">{won(perPerson)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-2 text-sm text-green-100/80">
          <span>{people}명 팀 총비용</span>
          <span className="font-semibold text-white">{won(total)}</span>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-green-100/70">
          카트비·캐디피는 팀 금액을 {people}명으로 나눠 1인당 {won(perPersonShared)} 반영했습니다.
        </p>
      </div>
    </div>
  );
}
