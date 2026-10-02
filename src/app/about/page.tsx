import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config";
export const metadata: Metadata = { title: "사이트 소개와 편집 기준", description: "골프하다의 정보 범위, 자료 확인 기준과 수정 요청 방법을 안내합니다.", alternates: { canonical: "/about" } };
export default function AboutPage() {
 return <main className="prose-kr mx-auto max-w-3xl px-4 py-14 text-green-900/80">
 <p className="text-sm font-semibold text-green-600">ABOUT GOLFHADA</p>
 <h1 className="mt-3 text-3xl font-bold text-green-900">좋은 라운드는 준비에서 시작합니다.</h1>
 <p className="mt-6">골프하다는 골프장을 비교하고 동반 라운드를 준비하는 사람을 위한 정보 사이트입니다. 지역별 코스 정보, 예약 전에 확인할 조건, 비용 정산과 기본 에티켓을 함께 정리합니다. 골프장 예약을 직접 중개하지 않습니다.</p>
 <h2 className="mt-10 text-xl font-bold">정보와 편집 의견을 구분합니다</h2>
 <p className="mt-4">코스 소개에 담긴 준비 메모와 비교 기준은 편집한 참고 정보입니다. 운영자의 직접 방문 후기, 프로골퍼의 평가 또는 골프장의 공식 추천을 의미하지 않습니다. 공개 정보만으로 실제 잔디 상태, 당일 혼잡도와 서비스 수준을 확정할 수 없습니다.</p>
 <h2 className="mt-10 text-xl font-bold">예약 전에는 공식 안내를 확인합니다</h2>
 <p className="mt-4">요금, 예약 자격, 취소 규정과 이용 조건은 시기와 코스에 따라 달라집니다. 출처를 연결한 항목은 해당 자료에서 확인할 수 있으며, 출처가 없는 항목까지 검증됐다는 뜻은 아닙니다. 확정 견적으로 오해할 수 있는 고정 그린피는 제공하지 않습니다. 실제 예약에는 골프장 공식 안내가 우선합니다.</p>
 <h2 className="mt-10 text-xl font-bold">가이드를 사용하는 방법</h2>
 <p className="mt-4">체크리스트는 동반자에게 확인할 질문을 만드는 데 활용해 주세요. 계산기는 입력한 금액과 스코어를 계산하며 실제 요금이나 공식 핸디캡을 인증하지 않습니다. 업무 관계의 초대와 비용 부담은 소속 조직의 규정 및 관련 법령을 먼저 확인해야 합니다.</p>
 <h2 className="mt-10 text-xl font-bold">수정 요청과 연락</h2>
 <p className="mt-4">오류를 발견하면 페이지 주소, 수정할 내용과 확인 가능한 공식 자료를 보내 주세요. 내용을 검토해 필요한 부분을 고칩니다. <Link href="/contact" className="underline text-green-600">문의 페이지</Link> 또는 <a href={"mailto:" + siteConfig.contactEmail} className="underline text-green-600">{siteConfig.contactEmail}</a>로 연락할 수 있습니다.</p>
 <h2 className="mt-10 text-xl font-bold">광고와 개인정보</h2>
 <p className="mt-4">사이트에 광고가 표시될 수 있습니다. 광고 링크와 편집 정보는 구분해서 살펴보세요. 광고 및 쿠키에 관한 안내는 <Link href="/privacy-policy" className="underline text-green-600">개인정보처리방침</Link>에서 확인할 수 있습니다.</p>
 </main>;
}
