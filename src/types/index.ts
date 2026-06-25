export type CourseType = "회원제" | "대중제" | "비회원제" | "퍼블릭" | "군/공공";

export interface Region {
  slug: string;
  name: string;
  shortName: string;
  description: string;
}

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string }
  | {
      type: "image";
      /** public/ 기준 경로. 예: /images/guide/golf-beginner-start/01-tee.jpg */
      src: string;
      /** 접근성·SEO용 대체 텍스트(필수). */
      alt: string;
      /** 실제 픽셀 가로(있으면 레이아웃 시프트 없이 정확히 렌더). */
      width?: number;
      /** 실제 픽셀 세로. */
      height?: number;
      /** 사진 아래 설명 캡션(선택). */
      caption?: string;
    };

export interface GuideArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  /** 대표(커버) 이미지. public/ 기준 경로. 목록 썸네일 + 상세 상단에 사용. */
  coverImage?: string;
  /** 커버 이미지 대체 텍스트. */
  coverAlt?: string;
  body: GuideBlock[];
}

export interface GolfCourse {
  slug: string;
  name: string;
  regionSlug: string;
  city: string;
  address: string;
  holes: number;
  type: CourseType;
  /** 참고용 그린피(원). 실제 요금은 시즌·요일·시간에 따라 달라집니다. */
  greenFeeWeekday?: number;
  greenFeeWeekend?: number;
  phone?: string;
  website?: string;
  openedYear?: number;
  /** 코스 면적(제곱미터). 공공데이터 출처. */
  areaSqm?: number;
  /** 상세 페이지 본문 (체류형 콘텐츠) */
  description: string;
  features: string[];
  nearby?: string[];
  featured?: boolean;
  /** 공공데이터에서 자동 생성된 항목 — 상세 정보 보강 전까지 검색 색인 제외. */
  imported?: boolean;
}
