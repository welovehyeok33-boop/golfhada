"use client";

import { useState } from "react";
import type { GuideArticle } from "@/types";
import GuideCard from "@/components/ui/GuideCard";

type GuideSummary = Pick<GuideArticle, "slug" | "title" | "excerpt" | "category" | "readingMinutes" | "coverImage" | "coverAlt">;

export default function GuideExplorer({ guides }: { guides: GuideSummary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const categories = ["전체", ...new Set(guides.map((guide) => guide.category))];
  const term = query.trim().toLowerCase();
  const filtered = guides.filter((guide) => (category === "전체" || guide.category === category) && `${guide.title} ${guide.excerpt}`.toLowerCase().includes(term));

  return (
    <section className="mt-8" aria-label="가이드 검색">
      <div className="rounded-2xl border border-green-200 bg-cream p-5 sm:p-6">
        <label htmlFor="guide-search" className="text-sm font-semibold text-green-900">지금 궁금한 내용을 찾아보세요</label>
        <input id="guide-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="예: 예약, 첫 라운드, 식사, 비용" className="mt-3 w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500" />
        <div className="mt-4 flex flex-wrap gap-2" aria-label="가이드 분야">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm transition ${category === item ? "border-green-700 bg-green-700 text-white" : "border-green-200 text-green-800 hover:bg-green-50"}`}>{item}</button>)}
        </div>
      </div>
      <p role="status" className="my-5 text-sm text-green-900/60">{filtered.length}개의 가이드{term && ` · ‘${query.trim()}’ 검색 결과`}</p>
      {filtered.length > 0 ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div> : <div className="rounded-xl border border-green-100 bg-cream p-8 text-center"><p className="text-green-900">검색된 글이 없습니다. 단어를 짧게 바꾸거나 분야를 전체로 선택해 보세요.</p><button type="button" onClick={() => { setQuery(""); setCategory("전체"); }} className="mt-4 text-sm font-semibold text-green-700 underline">전체 가이드 보기</button></div>}
    </section>
  );
}
