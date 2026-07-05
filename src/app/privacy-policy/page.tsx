import type { Metadata } from "next";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${siteConfig.name}의 개인정보처리방침입니다.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="prose-kr mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">개인정보처리방침</h1>
      <p className="mt-4 text-sm text-green-900/50">시행일: 2026년 6월 22일</p>

      <p className="mt-6 text-green-900/80">
        {siteConfig.name}(이하 &ldquo;사이트&rdquo;)는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등
        관련 법령을 준수합니다. 본 방침은 사이트가 어떤 정보를 수집하고 어떻게 이용하는지를 안내합니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">1. 수집하는 정보</h2>
      <p className="mt-4 text-green-900/80">
        본 사이트는 회원가입 절차가 없으며 이름, 연락처 등 직접적인 개인정보를 수집하지 않습니다. 다만 서비스
        개선과 통계 분석을 위해 다음의 정보가 자동으로 수집될 수 있습니다.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-green-900/80">
        <li>접속 IP, 브라우저 종류, 기기 정보, 접속 일시</li>
        <li>방문 페이지, 체류 시간 등 이용 기록</li>
        <li>쿠키(Cookie)를 통한 방문 정보</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-green-900">2. 쿠키 및 광고</h2>
      <p className="mt-4 text-green-900/80">
        본 사이트는 Google AdSense 등 제3자 광고 서비스를 이용할 수 있습니다. 이러한 광고 제공업체는 쿠키를
        사용하여 이용자의 방문 기록을 바탕으로 맞춤형 광고를 제공할 수 있습니다. Google을 포함한 제3자 공급업체는
        쿠키를 사용하여 이용자가 본 사이트나 다른 웹사이트에 방문한 기록을 토대로 광고를 게재합니다.
      </p>
      <p className="mt-4 text-green-900/80">
        이용자는 <a href="https://www.google.com/settings/ads" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서
        맞춤 광고를 비활성화할 수 있으며, 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">3. 분석 도구</h2>
      <p className="mt-4 text-green-900/80">
        본 사이트는 서비스 개선을 위해 향후 Google Analytics와 같은 방문자 통계 분석 도구를 도입할 수 있습니다.
        이러한 도구를 통해 수집되는 정보는 익명으로 처리되며 개인을 식별하는 데 사용되지 않습니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">4. 개인정보의 제3자 제공</h2>
      <p className="mt-4 text-green-900/80">
        사이트는 이용자의 개인정보를 본 방침에 명시한 범위를 넘어 제3자에게 제공하지 않습니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">5. 이용자의 권리</h2>
      <p className="mt-4 text-green-900/80">
        이용자는 언제든지 브라우저의 쿠키 설정 변경을 통해 정보 수집을 거부할 수 있습니다. 다만 쿠키 저장을
        거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">6. 개인정보처리방침의 변경</h2>
      <p className="mt-4 text-green-900/80">
        본 방침은 법령 및 사이트 정책에 따라 변경될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.
      </p>

      <h2 className="mt-10 text-xl font-bold text-green-900">7. 문의처</h2>
      <p className="mt-4 text-green-900/80">
        개인정보 관련 문의는 아래 이메일로 연락해 주세요.
        <br />
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-green-600 underline">
          {siteConfig.contactEmail}
        </a>
      </p>
    </div>
  );
}
