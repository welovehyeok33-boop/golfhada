import Link from "next/link";
import type { Region } from "@/types";

export default function RegionCard({ region, count }: { region: Region; count: number }) {
  return (
    <Link
      href={`/region/${region.slug}`}
      className="group flex items-center justify-between rounded-xl border border-green-100 bg-white px-5 py-4 transition hover:border-green-300 hover:bg-green-50"
    >
      <div>
        <span className="text-base font-bold text-green-900 group-hover:text-green-600">
          {region.name}
        </span>
        <p className="mt-0.5 text-xs text-green-900/60">{count}개 골프장</p>
      </div>
      <svg className="h-5 w-5 text-green-300 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
