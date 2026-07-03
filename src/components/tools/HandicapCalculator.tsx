"use client";

import { useState } from "react";

export default function HandicapCalculator() {
  const [par, setPar] = useState(72);
  const [scores, setScores] = useState<string[]>(["", "", ""]);

  const nums = scores.map((s) => Number(s)).filter((n) => n > 0);
  const count = nums.length;
  const avg = count ? nums.reduce((a, b) => a + b, 0) / count : 0;
  const best = count ? Math.min(...nums) : 0;
  const avgOverPar = count ? avg - par : 0;
  // 간이 핸디캡: 최근 라운드 평균 오버파 (정식 WHS 핸디캡과 다름)
  const simpleHandicap = count ? Math.max(0, Math.round(avgOverPar)) : 0;

  const tierLabel = (over: number) => {
    if (over <= 0) return "이븐파 이상 — 싱글 상위권";
    if (over <= 9) return "싱글 핸디캐퍼";
    if (over <= 18) return "보기 플레이어";
    if (over <= 27) return "더블보기 플레이어";
    return "입문·초급 단계";
  };

  const setScore = (i: number, v: string) => {
    const next = [...scores];
    next[i] = v.replace(/[^0-9]/g, "");
    setScores(next);
  };
  const addRow = () => setScores([...scores, ""]);
  const removeRow = (i: number) => setScores(scores.filter((_, idx) => idx !== i));

  return (
    <div className="rounded-2xl border border-green-100 bg-cream p-5 shadow-sm sm:p-6">
      {/* 코스 파 */}
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-green-900">코스 파(Par)</label>
        <div className="flex gap-2">
          {[70, 71, 72].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPar(p)}
              className={`rounded-lg border px-4 py-1.5 text-sm font-semibold transition ${
                par === p
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-green-200 text-green-700 hover:bg-green-50"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* 스코어 입력 */}
      <div className="mt-5 space-y-2">
        <p className="text-sm font-medium text-green-900">최근 라운드 스코어</p>
        {scores.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-14 shrink-0 text-xs text-green-900/50">{i + 1}라운드</span>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="예: 92"
              value={s}
              onChange={(e) => setScore(i, e.target.value)}
              className="flex-1 rounded-lg border border-green-200 bg-green-50/40 px-3 py-2 text-right font-semibold text-green-900 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            {scores.length > 1 && (
              <button
                type="button"
                onClick={() => removeRow(i)}
                className="h-9 w-9 shrink-0 rounded-lg border border-green-200 text-green-700 hover:bg-green-50"
                aria-label="삭제"
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addRow}
          className="w-full rounded-lg border border-dashed border-green-300 py-2 text-sm font-medium text-green-700 hover:bg-green-50"
        >
          + 라운드 추가
        </button>
      </div>

      {/* 결과 */}
      <div className="mt-6 rounded-xl bg-green-700 p-5 text-white">
        {count === 0 ? (
          <p className="text-sm text-green-100/80">스코어를 한 개 이상 입력하면 결과가 나타납니다.</p>
        ) : (
          <>
            <div className="flex items-end justify-between">
              <span className="text-sm text-green-100/90">간이 핸디캡 (평균 오버파)</span>
              <span className="text-2xl font-bold">{simpleHandicap}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-green-100">{tierLabel(avgOverPar)}</p>
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/15 pt-3 text-center text-sm">
              <div>
                <p className="text-green-100/70">평균</p>
                <p className="font-semibold">{avg.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-green-100/70">베스트</p>
                <p className="font-semibold">{best}</p>
              </div>
              <div>
                <p className="text-green-100/70">라운드</p>
                <p className="font-semibold">{count}회</p>
              </div>
            </div>
          </>
        )}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-green-900/50">
        ※ 여기서 계산하는 값은 평균 오버파 기반의 &lsquo;간이 핸디캡&rsquo;입니다. 정식 핸디캡(WHS)은 코스 레이팅과
        슬로프 레이팅을 반영해 산출되므로 실제 핸디캡과는 차이가 있을 수 있습니다.
      </p>
    </div>
  );
}
