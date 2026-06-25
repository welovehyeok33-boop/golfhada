import Link from "next/link";
import { siteConfig } from "@/config";

/**
 * 브랜드 로고. 그린(잔디 언덕) 위의 깃발 + 홀컵 옆 골프공 마크 + 워드마크.
 * 이름/색을 바꾸려면 config.ts(name)와 아래 그라데이션만 수정하면 됩니다.
 */
export default function Logo({
  className = "",
  showText = true,
  size = "md",
}: {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const badge = {
    sm: "h-7 w-7 rounded-lg",
    md: "h-9 w-9 rounded-xl",
    lg: "h-12 w-12 rounded-2xl",
  }[size];

  const text = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  }[size];

  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`}>
      <span
        className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-green-500 to-green-700 text-white shadow-sm ring-1 ring-green-900/5 transition group-hover:from-green-500 group-hover:to-green-800 ${badge}`}
      >
        <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" fill="none">
          {/* 깃발 */}
          <path
            d="M8 3.5 L15 5.4 L8 7.3 Z"
            fill="currentColor"
          />
          {/* 깃대 */}
          <path
            d="M8 3.2 V18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* 그린(잔디 언덕) */}
          <path
            d="M3 18 Q12 13.5 21 18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* 골프공 */}
          <circle cx="14.3" cy="16.3" r="1.4" fill="currentColor" />
        </svg>
      </span>

      {showText && (
        <span
          className={`bg-gradient-to-r from-green-700 to-green-500 bg-clip-text font-bold tracking-tight text-transparent ${text}`}
        >
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
