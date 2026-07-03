"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

export type SearchItem = {
  name: string;
  slug: string;
  region: string;
  city: string;
};

export default function CourseSearch({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return items
      .filter(
        (it) =>
          it.name.toLowerCase().includes(term) ||
          it.region.toLowerCase().includes(term) ||
          it.city.toLowerCase().includes(term),
      )
      .slice(0, 8);
  }, [query, items]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const showPanel = open && query.trim().length > 0;

  return (
    <div ref={boxRef} className="relative mx-auto mt-8 max-w-xl">
      <div className="flex items-center gap-2 rounded-full bg-cream px-5 py-3 shadow-lg ring-1 ring-black/5">
        <svg
          className="h-5 w-5 shrink-0 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-3.5-3.5" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="골프장 이름·지역으로 검색"
          aria-label="골프장 검색"
          className="w-full bg-transparent text-sm text-green-900 placeholder:text-green-900/40 focus:outline-none"
        />
      </div>

      {showPanel && (
        <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl bg-cream text-left shadow-xl ring-1 ring-black/5">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.map((it) => (
                <li key={it.slug}>
                  <Link
                    href={`/course/${it.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between gap-3 px-5 py-2.5 hover:bg-green-50"
                  >
                    <span className="font-medium text-green-900">{it.name}</span>
                    <span className="shrink-0 text-xs text-green-900/50">
                      {it.region} · {it.city}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-4 text-sm text-green-900/60">
              &lsquo;{query.trim()}&rsquo; 검색 결과가 없습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
