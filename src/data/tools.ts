export type GolfTool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export const tools: GolfTool[] = [
  {
    slug: "round-cost",
    name: "라운드 비용 계산기",
    tagline: "1인당 얼마 들까?",
    description: "그린피·카트비·캐디피·식사비를 인원수로 나눠 1인당 라운드 비용을 한 번에 계산합니다.",
  },
  {
    slug: "handicap",
    name: "핸디캡 계산기",
    tagline: "내 실력은 어느 정도?",
    description: "최근 라운드 스코어를 넣으면 평균 오버파 기반의 간이 핸디캡과 실력 단계를 알려줍니다.",
  },
  {
    slug: "distance",
    name: "비거리 환산기",
    tagline: "야드 ↔ 미터",
    description: "야드와 미터를 즉시 변환하고, 클럽별 평균 비거리표로 내 거리를 가늠해 봅니다.",
  },
];

export function getTool(slug: string): GolfTool | undefined {
  return tools.find((t) => t.slug === slug);
}
