import type { Metadata } from "next";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "사이트 소개",
  description: `${siteConfig.name}는 전국 골프장 정보를 지역별로 정리해 제공하는 골프 정보 사이트입니다.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="prose-kr mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">사이트 소개</h1>

      <p className="mt-6 text-green-900/80">
        <strong>{siteConfig.name}</strong>는 전국의 골프장 정보를 지역별로 한곳에 모아 제공하는 골프 정보
        사이트입니다. 라운드를 계획하는 골퍼가 그린피, 코스 형태, 홀 수, 주변 명소 등 필요한 정보를 빠르게
        찾을 수 있도록 돕는 것이 목표입니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">우리가 제공하는 정보</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-green-900/80">
        <li>지역별 골프장 목록과 코스별 상세 정보</li>
        <li>참고용 그린피(평일·주말)와 운영 형태(대중제·회원제) 안내</li>
        <li>코스의 특징과 라운드 시 알아두면 좋은 정보</li>
        <li>골프장 주변의 가볼 만한 관광지·맛집 정보</li>
        <li>그린피 절약, 부킹 성공률 향상 등 실용 가이드</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-green-900">정보의 정확성에 대하여</h2>
      <p className="mt-4 text-green-900/80">
        본 사이트의 정보는 공개된 자료를 바탕으로 정리한 참고용 정보입니다. 그린피와 운영 정보는 시즌, 요일,
        시간대에 따라 수시로 변동되므로 실제 예약 및 방문 전에는 반드시 해당 골프장의 공식 채널을 통해 최신
        정보를 확인하시기 바랍니다. 사이트는 골프장 예약을 직접 중개하지 않습니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">문의</h2>
      <p className="mt-4 text-green-900/80">
        정보 수정 요청, 골프장 등록, 제휴 및 광고 문의는 아래 이메일로 연락해 주세요.
        <br />
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-green-600 underline">
          {siteConfig.contactEmail}
        </a>
      </p>
    </div>
  );
}
