import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지가 존재하지 않거나 옮겨졌습니다.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-5xl font-bold text-green-600 sm:text-6xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-green-900 sm:text-3xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 leading-relaxed text-green-900/70">
        요청하신 주소가 바뀌었거나 삭제되었을 수 있습니다. 아래에서 원하는 정보를 다시 찾아보세요.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700"
        >
          홈으로 가기
        </Link>
        <Link
          href="/guide"
          className="rounded-full border border-green-300 bg-white px-6 py-2.5 text-sm font-medium text-green-700 hover:bg-green-50"
        >
          골프 가이드 보기
        </Link>
      </div>

      <div className="mt-10 w-full border-t border-green-100 pt-6">
        <p className="text-sm text-green-900/60">이런 페이지는 어떠세요?</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-green-700">
          <li>
            <Link href="/region/gyeonggi" className="hover:text-green-600">
              지역별 골프장
            </Link>
          </li>
          <li>
            <Link href="/guide" className="hover:text-green-600">
              비즈니스·접대 가이드
            </Link>
          </li>
          <li>
            <Link href="/tools" className="hover:text-green-600">
              골프 계산기
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-600">
              사이트 소개
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
