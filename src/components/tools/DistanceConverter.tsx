"use client";

import { useState } from "react";

const YARD_TO_METER = 0.9144;

export default function DistanceConverter() {
  const [yard, setYard] = useState("220");
  const [meter, setMeter] = useState((220 * YARD_TO_METER).toFixed(1));

  const onYard = (v: string) => {
    const clean = v.replace(/[^0-9.]/g, "");
    setYard(clean);
    const n = Number(clean);
    setMeter(clean === "" || isNaN(n) ? "" : (n * YARD_TO_METER).toFixed(1));
  };
  const onMeter = (v: string) => {
    const clean = v.replace(/[^0-9.]/g, "");
    setMeter(clean);
    const n = Number(clean);
    setYard(clean === "" || isNaN(n) ? "" : (n / YARD_TO_METER).toFixed(1));
  };

  return (
    <div className="rounded-2xl border border-green-100 bg-cream p-5 shadow-sm sm:p-6">
      <div className="grid grid-cols-1 items-end gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-green-900">야드 (yd)</label>
          <input
            type="number"
            inputMode="decimal"
            value={yard}
            onChange={(e) => onYard(e.target.value)}
            className="rounded-lg border border-green-200 bg-green-50/40 px-3 py-2.5 text-right text-lg font-bold text-green-900 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>
        <div className="hidden pb-3 text-center text-green-900/40 sm:block">⇄</div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-green-900">미터 (m)</label>
          <input
            type="number"
            inputMode="decimal"
            value={meter}
            onChange={(e) => onMeter(e.target.value)}
            className="rounded-lg border border-green-200 bg-green-50/40 px-3 py-2.5 text-right text-lg font-bold text-green-900 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>
      </div>
      <p className="mt-3 text-xs text-green-900/50">1야드 = 0.9144m · 1m ≈ 1.094yd</p>
    </div>
  );
}
