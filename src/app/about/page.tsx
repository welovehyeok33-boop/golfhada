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
        라운드 한 번 잡으려고 골프장 이름을 검색해 본 사람이라면 한 번쯤 겪었을 겁니다. 그린피는 예약
        사이트마다 다르게 뜨고, 코스가 산악형인지 평지인지, 초보가 가도 되는 곳인지는 후기를 한참 뒤져야 겨우
        감이 옵니다. <strong>{siteConfig.name}</strong>는 그 흩어진 정보를 골프장 한 곳 기준으로 모아 정리하는
        사이트입니다. 어디서 칠지 정하는 데 드는 시간을 줄이는 것, 그게 전부입니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">누가 만드나요</h2>
      <p className="mt-4 text-green-900/80">
        주말 골퍼인 운영자가 직접 자료를 모으고 글을 씁니다. 라운드를 준비하며 매번 검색하던 내용을 한곳에
        정리해 두자는 생각에서 시작했고, 그래서 화면도 광고로 도배하기보다 정보를 빨리 찾는 쪽에 무게를
        뒀습니다. 거창한 골프 전문 매체는 아니지만, 라운드를 앞두고 무엇이 궁금한지는 잘 아는 사람이 만들고
        있다고 생각해 주시면 됩니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">우리가 제공하는 정보</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-green-900/80">
        <li>지역별 골프장 목록과 코스별 상세 정보</li>
        <li>참고용 그린피(평일·주말)와 운영 형태(대중제·회원제) 안내</li>
        <li>코스의 특징과 라운드 시 알아두면 좋은 정보</li>
        <li>골프장 주변의 가볼 만한 관광지·맛집 정보</li>
        <li>그린피 절약, 부킹 성공률 향상 등 실용 가이드</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-green-900">정보는 이렇게 정리합니다</h2>
      <p className="mt-4 text-green-900/80">
        골프장 기본 정보는 문화체육관광부의 「전국 골프장 현황」 공공데이터를 토대로 하고, 위치·홀 수·운영
        형태 같은 사실 정보를 먼저 채웁니다. 그 위에 코스 성격, 라운드 난도, 주변 볼거리처럼 직접 가 본 경험과
        공개된 후기·자료를 종합한 설명을 덧붙입니다. 아직 상세 정보가 채워지지 않은 골프장은 순차적으로 보강하고
        있으며, 보강 전 코스는 검색 색인에서 제외해 빈 정보가 검색에 노출되지 않도록 관리합니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">정보의 정확성에 대하여</h2>
      <p className="mt-4 text-green-900/80">
        그린피와 운영 정보는 시즌, 요일, 시간대에 따라 수시로 바뀝니다. 본 사이트의 수치는 어디까지나 참고용
        기준선이므로, 실제 예약과 방문 전에는 해당 골프장의 공식 채널이나 예약 플랫폼에서 최신 정보를 다시
        확인해 주세요. 잘못된 정보를 발견하셨다면 알려 주시면 확인 후 바로잡겠습니다. 사이트는 골프장 예약을
        직접 중개하지 않습니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">광고에 대하여</h2>
      <p className="mt-4 text-green-900/80">
        사이트 운영과 정보 보강에 드는 비용을 충당하기 위해 일부 페이지에 광고가 표시될 수 있습니다. 광고는
        콘텐츠와 명확히 구분되도록 배치하며, 특정 골프장으로부터 대가를 받고 순위나 평가를 조정하지 않습니다.
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
