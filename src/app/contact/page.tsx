import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "문의하기",
  description: `${siteConfig.name}에 정보 수정, 골프장 등록, 제휴 및 광고 문의를 남겨주세요.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="prose-kr mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">문의하기</h1>
      <p className="mt-6 text-green-900/80">
        골프장 정보 수정 요청, 신규 골프장 등록, 제휴·광고 등 어떤 문의든 환영합니다. 아래 양식을 작성하시거나
        이메일로 직접 연락해 주세요. 확인 후 빠르게 회신드리겠습니다.
      </p>

      <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-900/80">
        이메일:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-green-600 underline">
          {siteConfig.contactEmail}
        </a>
      </div>

      <ContactForm />

      <p className="mt-6 text-xs text-green-900/50">
        ※ 문의 양식은 작성하신 내용으로 메일 작성 창을 열어줍니다. 메일 앱이 설정되어 있지 않은 경우 위 이메일
        주소로 직접 보내주세요.
      </p>
    </div>
  );
}
