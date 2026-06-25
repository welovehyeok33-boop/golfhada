import type { Region } from "@/types";

export const regions: Region[] = [
  {
    slug: "gyeonggi",
    name: "경기",
    shortName: "경기",
    description:
      "수도권 골퍼가 가장 많이 찾는 핵심 권역입니다. 회원제부터 대중제까지 전국에서 골프장 밀도가 가장 높습니다.",
  },
  {
    slug: "gangwon",
    name: "강원",
    shortName: "강원",
    description:
      "산악 지형을 살린 시원한 경관의 코스가 많습니다. 여름 피서 라운드와 리조트 연계 패키지로 인기가 높습니다.",
  },
  {
    slug: "gyeongbuk",
    name: "경북",
    shortName: "경북",
    description:
      "경주·문경 등 내륙 산악형 코스가 다양하게 분포합니다. 관광지와 묶어 즐기기 좋고 봄·가을 시즌 라운드가 활발합니다.",
  },
  {
    slug: "jeonnam",
    name: "전남",
    shortName: "전남",
    description:
      "비교적 한적하고 그린피가 합리적인 코스가 많습니다. 남도 미식 여행과 묶어 1박 라운드로 즐기기 좋습니다.",
  },
  {
    slug: "gyeongnam",
    name: "경남",
    shortName: "경남",
    description:
      "부산·창원 도심에서 접근이 편한 코스가 많습니다. 온화한 기후로 라운드 시즌이 길어 사계절 골프가 가능합니다.",
  },
  {
    slug: "chungbuk",
    name: "충북",
    shortName: "충북",
    description:
      "수도권에서 1~2시간 거리로 당일 라운드가 가능한 가성비 코스가 풍부합니다. 충주·청주 일대에 골프장이 밀집해 있습니다.",
  },
  {
    slug: "jeju",
    name: "제주",
    shortName: "제주",
    description:
      "국내 최고의 골프 여행지입니다. 화산 지형을 살린 명문 코스가 밀집해 있어 2~3일 골프 패키지로 인기가 높습니다.",
  },
  {
    slug: "jeonbuk",
    name: "전북",
    shortName: "전북",
    description:
      "무주·군산 등 자연 경관이 좋은 코스가 있습니다. 한적한 분위기에서 여유로운 라운드를 즐기기 좋은 지역입니다.",
  },
  {
    slug: "chungnam",
    name: "충남",
    shortName: "충남",
    description:
      "천안·태안 일대에 코스가 많아 수도권에서 접근이 좋습니다. 서해안 시사이드 코스와 챔피언십 코스가 공존합니다.",
  },
  {
    slug: "incheon",
    name: "인천",
    shortName: "인천",
    description:
      "공항과 가까워 해외 골프 전후로 들르기 좋고, 영종도·강화 일대에 바다 전망 코스가 있습니다.",
  },
  {
    slug: "busan",
    name: "부산",
    shortName: "부산",
    description:
      "바다와 도심을 함께 즐기는 라운드가 가능합니다. 해운대·기장 일대 리조트형 골프장이 강점입니다.",
  },
  {
    slug: "ulsan",
    name: "울산",
    shortName: "울산",
    description:
      "동해안과 영남알프스를 배경으로 한 코스가 있습니다. 산업도시 특성상 평일 라운드 수요가 탄탄합니다.",
  },
  {
    slug: "daegu",
    name: "대구",
    shortName: "대구",
    description:
      "도심 근교에 접근성 좋은 코스가 모여 있습니다. 분지 기후 특성상 겨울 라운드 가능 기간이 깁니다.",
  },
  {
    slug: "gwangju",
    name: "광주",
    shortName: "광주",
    description:
      "호남권의 중심 도시로 근교 대중제 코스가 잘 갖춰져 있습니다. 합리적인 그린피가 강점입니다.",
  },
  {
    slug: "daejeon",
    name: "대전",
    shortName: "대전",
    description:
      "충청권 교통의 중심으로 전국 어디서나 접근이 쉽습니다. 비즈니스 라운드 수요가 많은 지역입니다.",
  },
  {
    slug: "sejong",
    name: "세종",
    shortName: "세종",
    description:
      "행정중심복합도시 인근의 코스가 있습니다. 대전·청주권에서 접근이 편리해 수도권 외 골퍼들이 함께 이용합니다.",
  },
  {
    slug: "seoul",
    name: "서울",
    shortName: "서울",
    description:
      "도심에서 접근성이 좋은 골프장과 실내 연습장이 모여 있는 지역입니다. 라운드보다 연습·스크린 수요가 많습니다.",
  },
];

export const regionMap = new Map(regions.map((r) => [r.slug, r]));

export function getRegion(slug: string): Region | undefined {
  return regionMap.get(slug);
}
