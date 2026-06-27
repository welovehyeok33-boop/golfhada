import type { Metadata } from "next";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "사이트 소개",
  description: `${siteConfig.name}는 전국 골프장 정보를 지역별로 정리해 제공하는 골프 정보 사이트입니다.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { author } = siteConfig;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.short,
    knowsAbout: ["골프장", "비즈니스 골프", "접대 라운드", "골프 예약"],
    url: `${siteConfig.url}/about`,
  };

  return (
    <div className="prose-kr mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">사이트 소개</h1>

      <p className="mt-6 text-green-900/80">
        거래처를 모시고 라운드를 잡아 본 사람이라면 압니다. 골프장을 고르는 기준이 &lsquo;코스가 예쁜가&rsquo;가
        아니라 &lsquo;모시기에 괜찮은가&rsquo;로 바뀌는 순간이 있습니다. 그린피는 예약 사이트마다 다르게 뜨고,
        클럽하우스 격식이나 접근성, 동반자가 편하게 칠 만한 난도는 후기를 한참 뒤져야 겨우 감이 옵니다.
        <strong>{siteConfig.name}</strong>는 그 흩어진 정보를 골프장 한 곳 기준으로 모으되,
        <strong>비즈니스·접대 라운드의 시선</strong>으로 다시 정리하는 사이트입니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">누가 만드나요</h2>
      <p className="mt-4 text-green-900/80">
        운영자 <strong>{author.name}</strong>입니다. {author.role}로 사이트를 직접 만들고 글을 씁니다.
        {author.bio}
      </p>
      <p className="mt-4 text-green-900/80">
        그래서 이 사이트의 코스 설명은 &lsquo;경치가 좋다&rsquo;에서 끝나지 않습니다. 접대하기 좋은지, 동반자가
        부담 없이 칠 수 있는지, 클럽하우스와 식사는 격식을 갖췄는지, 회사에서 출발하기 어떤지 같은
        <strong>실전 기준의 장단점</strong>을 함께 적습니다. 프로골퍼의 평점이 아니라, 라운드를 &lsquo;성사시켜야
        하는&rsquo; 사람의 눈으로 본 메모라고 생각해 주시면 됩니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">우리가 제공하는 정보</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-green-900/80">
        <li>지역별 골프장 목록과 코스별 상세 정보</li>
        <li>참고용 그린피(평일·주말)와 운영 형태(대중제·회원제) 안내</li>
        <li>비즈니스·접대 라운드 관점의 코스별 장점과 단점 메모</li>
        <li>어떤 동반자·어떤 자리에 어울리는지에 대한 추천</li>
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
