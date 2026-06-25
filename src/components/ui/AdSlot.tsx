import { siteConfig } from "@/config";

/**
 * 애드센스 광고 슬롯. config.adsenseClient 가 비어 있으면 자리만 표시합니다.
 * 승인 후 client ID를 넣고, 발급받은 각 슬롯의 data-ad-slot 값을 prop으로 전달하세요.
 */
export default function AdSlot({ slot, className }: { slot?: string; className?: string }) {
  if (!siteConfig.adsenseClient) {
    return (
      <div
        className={`flex h-24 items-center justify-center rounded-lg border border-dashed border-green-200 bg-green-50/50 text-xs text-green-900/40 ${className ?? ""}`}
      >
        광고 영역 (애드센스 승인 후 표시)
      </div>
    );
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
