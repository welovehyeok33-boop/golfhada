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
    name: "스코어 평균 계산기",
    tagline: "기록을 한눈에",
    description: "최근 스코어의 평균·최저 타수·평균 오버파를 계산합니다. 공식 핸디캡과 구분해서 기록을 살펴보세요.",
  },
  {
    slug: "distance",
    name: "비거리 환산기",
    tagline: "야드 ↔ 미터",
    description: "야드와 미터를 변환합니다. 캐리와 총거리를 구분해 기록과 코스 표지판을 비교하세요.",
  },
];

export function getTool(slug: string): GolfTool | undefined {
  return tools.find((t) => t.slug === slug);
}
