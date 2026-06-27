import Link from "next/link";
import type { Region } from "@/types";

export default function RegionCard({ region, count }: { region: Region; count: number }) {
  return (
    <Link
      href={`/region/${region.slug}`}
      className="group relative overflow-hidden rounded-xl border border-green-100 bg-gradient-to-br from-white to-green-50 px-5 py-4 transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-green-900 group-hover:text-green-700">
          {region.name}
        </span>
        <svg className="h-5 w-5 text-green-300 transition group-hover:translate-x-0.5 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="mt-1 text-sm text-green-900/60">
        <span className="text-lg font-bold text-green-600">{count}</span>
        <span className="ml-1">개 골프장</span>
      </p>
    </Link>
  );
}
