import type { Region } from "@/types";

export const regions: Region[] = [
  {
    slug: "gyeonggi",
    name: "경기",
    shortName: "경기",
    description: "경기 지역은 동반자의 출발지와 골프장이 있는 시·군부터 맞춰 비교하세요. 같은 경기도 안의 코스라도 합승 장소와 귀가 방향에 따라 일정이 달라집니다.",
  },
  {
    slug: "gangwon",
    name: "강원",
    shortName: "강원",
    description: "강원 라운드는 당일 이동과 숙박 중 어떤 일정인지 먼저 정하면 후보를 줄이기 쉽습니다. 리조트 이름이 같아도 객실과 골프의 예약 조건은 각각 확인하세요.",
  },
  {
    slug: "gyeongbuk",
    name: "경북",
    shortName: "경북",
    description: "경북에서 관광과 골프를 함께 계획한다면 관광지 이름보다 골프장과 숙소의 실제 주소부터 비교하세요. 지역 전체를 하나의 이동권으로 가정하지 않는 것이 좋습니다.",
  },
  {
    slug: "jeonnam",
    name: "전남",
    shortName: "전남",
    description: "전남 골프 여행은 코스 예약과 왕복 교통을 함께 검토하세요. 지역 이름만 보고 그린피가 저렴하거나 한적할 것으로 단정하지 않고 같은 날짜의 총비용을 비교합니다.",
  },
  {
    slug: "gyeongnam",
    name: "경남",
    shortName: "경남",
    description: "경남에서는 당일 모임인지 남해 등지로 떠나는 숙박 여행인지부터 구분하세요. 골프장까지 도착하는 길뿐 아니라 라운드 뒤 운전과 휴식도 일정에 포함합니다.",
  },
  {
    slug: "chungbuk",
    name: "충북",
    shortName: "충북",
    description: "충북 후보는 청주·충주 등 실제 목적지와 동반자의 출발지를 기준으로 살펴보세요. 수도권에서 일정한 시간 안에 도착한다고 가정하기보다 티타임에 맞춰 경로를 조회합니다.",
  },
  {
    slug: "jeju",
    name: "제주",
    shortName: "제주",
    description: "제주에서는 티타임만 먼저 확정하기보다 항공편·숙소·차량을 함께 연결해 보세요. 예약 상품의 포함 범위와 날씨로 인한 변경 조건은 업체별로 구분해야 합니다.",
  },
  {
    slug: "jeonbuk",
    name: "전북",
    shortName: "전북",
    description: "전북 코스를 비교할 때는 군산과 무주처럼 서로 다른 권역을 한 일정으로 묶어도 되는지부터 살펴보세요. 시·군과 숙소를 기준으로 이동 순서를 그려보면 좋습니다.",
  },
  {
    slug: "chungnam",
    name: "충남",
    shortName: "충남",
    description: "충남에서는 천안권 당일 모임과 해안권 여행의 이동 조건을 나눠보세요. 이용할 코스와 실제 출발지, 라운드 뒤 돌아갈 장소를 함께 적어 비교하는 편이 좋습니다.",
  },
  {
    slug: "incheon",
    name: "인천",
    shortName: "인천",
    description: "인천에서는 영종도·청라·송도 등 실제 코스 위치를 구분하세요. 공항과 같은 권역이라는 이유로 비행 전후에 짧게 들를 수 있다고 판단하지 않습니다.",
  },
  {
    slug: "busan",
    name: "부산",
    shortName: "부산",
    description: "부산에서는 숙소가 있는 곳과 골프장의 실제 위치를 나눠 확인하세요. 도심 일정과 기장권 라운드를 함께 잡을 때는 구간별 이동 시간을 직접 조회하는 것이 좋습니다.",
  },
  {
    slug: "ulsan",
    name: "울산",
    shortName: "울산",
    description: "울산 라운드는 회사나 숙소가 아닌 실제 출발지를 기준으로 계획하세요. 평일·주말 수요나 예약 난도를 지역의 산업 특성만으로 추측하지 않고 예약 화면에서 확인합니다.",
  },
  {
    slug: "daegu",
    name: "대구",
    shortName: "대구",
    description: "대구권 코스는 도심 날씨와 골프장 현장 조건을 구분해 살펴보세요. 지역 기후만으로 겨울 라운드가 가능하다거나 모든 코스의 접근이 쉽다고 단정하지 않습니다.",
  },
  {
    slug: "gwangju",
    name: "광주",
    shortName: "광주",
    description: "광주 당일 모임은 낮은 그린피뿐 아니라 출발 시각·종료 예상·귀가 제약을 함께 비교하세요. 가까운 후보라도 접수와 환복 시간을 생략하지 않는 것이 좋습니다.",
  },
  {
    slug: "daejeon",
    name: "대전",
    shortName: "대전",
    description: "대전에서는 골프와 유성권 숙박·온천 이용을 각각의 일정으로 구분하세요. 모든 참가자가 같은 관광이나 숙박을 원한다고 가정하지 않고 선택 여부를 먼저 확인합니다.",
  },
  {
    slug: "sejong",
    name: "세종",
    shortName: "세종",
    description: "세종권 모임은 참석자의 실제 일정과 비용 부담 조건을 먼저 확인하세요. 상대의 소속·직무에 따른 내부 규정은 골프장 예약과 별도로 검토해야 합니다.",
  },
  {
    slug: "seoul",
    name: "서울",
    shortName: "서울",
    description: "현재 소개할 서울 지역 코스를 준비 중입니다. 실제 출발지와 이동 조건에 맞는 다른 지역 목록을 이용해 주세요.",
  },
];

export const regionMap = new Map(regions.map((r) => [r.slug, r]));

export function getRegion(slug: string): Region | undefined {
  return regionMap.get(slug);
}
