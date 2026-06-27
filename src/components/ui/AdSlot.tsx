import { siteConfig } from "@/config";

/**
 * 애드센스 광고 슬롯. config.adsenseClient 가 비어 있으면 자리만 표시합니다.
 * 승인 후 client ID를 넣고, 발급받은 각 슬롯의 data-ad-slot 값을 prop으로 전달하세요.
 */
export default function AdSlot({ slot, className }: { slot?: string; className?: string }) {
  // 애드센스 client ID가 설정되기 전(승인 전)에는 아무것도 표시하지 않습니다.
  if (!siteConfig.adsenseClient) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={{ display: "block" }}
      data-ad-client={siteConfig.adsenseClient}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
