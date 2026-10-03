"use client";

import { useState } from "react";

export default function PreparationChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const completed = checked.filter(Boolean).length;

  return (
    <section className="mt-8 rounded-2xl border border-green-200 bg-cream p-5 sm:p-6" aria-label="내 준비 상태">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-green-900">내 준비 상태</h3>
        <span className="text-sm text-green-700" aria-live="polite">{completed} / {items.length} 확인</span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-green-900/60">준비한 항목을 눌러 확인해 보세요. 페이지를 새로 열면 체크가 초기화됩니다.</p>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item}>
            <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-green-50">
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => setChecked((previous) => previous.map((value, i) => i === index ? !value : value))}
                className="mt-1 h-4 w-4 shrink-0 accent-green-700"
              />
              <span className="text-sm leading-relaxed text-green-900/80">{item}</span>
            </label>
          </li>
        ))}
      </ul>
      {completed > 0 && <button type="button" onClick={() => setChecked(items.map(() => false))} className="mt-4 text-sm text-green-700 underline">체크 다시 시작</button>}
    </section>
  );
}
