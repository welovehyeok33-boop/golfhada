import type { GolfCourse } from "@/types";
import { importedCourses } from "./courses.imported";

// 참고용 시드 데이터입니다. 그린피·연락처 등 변동 정보는 방문 전 각 골프장 공식 채널에서 확인하세요.
const seedCourses: GolfCourse[] = [
  // ── 경기 ──────────────────────────────────────────────
  {
    slug: "lakeside-cc",
    name: "레이크사이드 컨트리클럽",
    regionSlug: "gyeonggi",
    city: "용인시",
    address: "경기 용인시 처인구 모현읍",
    holes: 54,
    type: "대중제",
    greenFeeWeekday: 150000,
    greenFeeWeekend: 230000,
    openedYear: 1990,
    featured: true,
    description:
      "수도권 최대 규모의 54홀 대중제 골프장입니다. 동·서·남 코스로 나뉘어 있어 라운드마다 다른 분위기를 즐길 수 있고, 부킹 가능 물량이 많아 주말에도 예약이 비교적 수월한 편입니다. 코스 전반이 평탄해 카트 이동과 보행 부담이 적어 초중급 골퍼에게 특히 인기가 높습니다.",
    features: ["54홀", "대중제", "수도권 접근성", "넓은 부킹 물량"],
    nearby: ["에버랜드", "한국민속촌", "용인 백암순대"],
  },
  {
    slug: "bear-creek-pocheon",
    name: "베어크리크 포천",
    regionSlug: "gyeonggi",
    city: "포천시",
    address: "경기 포천시 일동면",
    holes: 36,
    type: "대중제",
    greenFeeWeekday: 170000,
    greenFeeWeekend: 250000,
    openedYear: 2002,
    description:
      "울창한 자작나무 숲과 계곡을 끼고 설계된 36홀 코스로, 페어웨이 관리 상태가 좋기로 정평이 나 있습니다. 크리크(개울)가 코스 곳곳에 배치되어 전략적인 공략이 필요하며, 가을 단풍 시즌의 경관이 특히 빼어납니다.",
    features: ["36홀", "수림형 코스", "우수한 코스 관리"],
    nearby: ["산정호수", "포천 아트밸리", "이동갈비"],
  },
  {
    slug: "namseoul-cc",
    name: "남서울 컨트리클럽",
    regionSlug: "gyeonggi",
    city: "성남시",
    address: "경기 성남시 분당구",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 230000,
    greenFeeWeekend: 330000,
    openedYear: 1968,
    description:
      "강남에서 30분 거리에 위치한 도심 근교 명문 회원제 코스입니다. KPGA·KLPGA 투어가 개최되는 챔피언십 코스로, 오랜 역사만큼 수림이 우거져 품격 있는 라운드를 즐길 수 있습니다. 접근성이 뛰어나 비즈니스 라운드 수요가 많습니다.",
    features: ["18홀", "회원제", "투어 개최 코스", "강남 근접"],
    nearby: ["분당 정자동 카페거리", "판교 테크노밸리"],
  },

  // ── 인천 ──────────────────────────────────────────────
  {
    slug: "sky72-ocean",
    name: "스카이72 골프앤리조트 오션코스",
    regionSlug: "incheon",
    city: "중구",
    address: "인천 중구 영종도",
    holes: 72,
    type: "대중제",
    greenFeeWeekday: 160000,
    greenFeeWeekend: 250000,
    openedYear: 2005,
    featured: true,
    description:
      "인천공항 바로 옆 영종도에 자리한 국내 최대 규모의 퍼블릭 골프장입니다. 바다를 끼고 도는 오션코스는 바람과의 싸움이 묘미이며, 해외 골프 출국·입국 전후로 라운드를 끼워 넣기 좋은 입지입니다. 야간 라운드와 대규모 연습장도 함께 운영됩니다.",
    features: ["72홀", "대중제", "공항 인접", "오션뷰", "야간 라운드"],
    nearby: ["인천공항", "을왕리 해수욕장", "영종도 조개구이"],
  },
  {
    slug: "bears-best-cheongna",
    name: "베어즈베스트 청라",
    regionSlug: "incheon",
    city: "서구",
    address: "인천 서구 청라동",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 180000,
    greenFeeWeekend: 270000,
    openedYear: 2011,
    description:
      "잭 니클라우스가 전 세계에 설계한 코스 중 명홀만 모아 재현한 독특한 콘셉트의 27홀 코스입니다. 홀마다 세계 유명 코스의 특징을 경험할 수 있어 색다른 재미가 있고, 도심과 가까워 접근성이 뛰어납니다.",
    features: ["27홀", "잭 니클라우스 설계", "도심 근접"],
    nearby: ["청라 호수공원", "송도 센트럴파크"],
  },

  // ── 강원 ──────────────────────────────────────────────
  {
    slug: "phoenix-cc",
    name: "휘닉스 컨트리클럽",
    regionSlug: "gangwon",
    city: "평창군",
    address: "강원 평창군 봉평면",
    holes: 18,
    type: "대중제",
    greenFeeWeekday: 160000,
    greenFeeWeekend: 240000,
    openedYear: 2004,
    featured: true,
    description:
      "해발 고지대에 자리해 한여름에도 시원한 라운드가 가능한 산악형 코스입니다. 휘닉스 평창 리조트와 연계되어 숙박·스파·라운드를 묶은 패키지로 인기가 높고, 고저차를 살린 다이내믹한 홀 구성이 특징입니다.",
    features: ["18홀", "고지대 코스", "리조트 연계", "여름 라운드"],
    nearby: ["휘닉스 평창", "이효석 메밀밭", "봉평 메밀국수"],
  },
  {
    slug: "oak-valley-cc",
    name: "오크밸리 컨트리클럽",
    regionSlug: "gangwon",
    city: "원주시",
    address: "강원 원주시 지정면",
    holes: 36,
    type: "대중제",
    greenFeeWeekday: 150000,
    greenFeeWeekend: 230000,
    openedYear: 2001,
    description:
      "수도권에서 1시간대로 접근 가능한 36홀 산악 리조트 코스입니다. 참나무 숲을 따라 조성된 페어웨이가 인상적이며, 콘도·스키장과 함께 사계절 휴양지로 운영됩니다. 가족 단위 골프 여행지로 선호도가 높습니다.",
    features: ["36홀", "리조트형", "수도권 1시간대"],
    nearby: ["뮤지엄 산", "원주 한지테마파크"],
  },

  // ── 충청 ──────────────────────────────────────────────
  {
    slug: "woojung-hills-cc",
    name: "우정힐스 컨트리클럽",
    regionSlug: "chungnam",
    city: "천안시",
    address: "충남 천안시 동남구",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 200000,
    greenFeeWeekend: 300000,
    openedYear: 1995,
    featured: true,
    description:
      "한국오픈이 오랜 기간 개최되어 온 국내 대표 챔피언십 코스입니다. 좁은 페어웨이와 까다로운 그린으로 정교한 샷이 요구되며, 프로들도 어려워하는 난도 높은 코스로 잘 알려져 있습니다. 진정한 도전을 원하는 골퍼에게 추천합니다.",
    features: ["18홀", "회원제", "한국오픈 개최", "고난도 코스"],
    nearby: ["천안 독립기념관", "병천 순대거리"],
  },
  {
    slug: "golden-bay-cc",
    name: "골든베이 골프앤리조트",
    regionSlug: "chungnam",
    city: "태안군",
    address: "충남 태안군 고남면",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 140000,
    greenFeeWeekend: 220000,
    openedYear: 2014,
    description:
      "서해 바다를 마주한 27홀 시사이드 코스로, 일몰 무렵 라운드의 경관이 특히 아름답습니다. 바닷바람의 영향을 직접 받는 링크스 스타일 홀이 있어 색다른 공략 재미를 줍니다. 태안 해변 여행과 묶기 좋습니다.",
    features: ["27홀", "시사이드", "일몰 명소"],
    nearby: ["꽃지 해수욕장", "안면도 자연휴양림", "태안 대하구이"],
  },

  // ── 전라 ──────────────────────────────────────────────
  {
    slug: "south-links-yeongam",
    name: "사우스링스 영암",
    regionSlug: "jeonnam",
    city: "영암군",
    address: "전남 영암군 삼호읍",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 130000,
    greenFeeWeekend: 200000,
    openedYear: 2008,
    description:
      "간척지에 조성된 국내 보기 드문 정통 링크스 코스입니다. 나무가 거의 없는 개방형 지형에서 바람을 읽는 능력이 스코어를 좌우하며, 영국·스코틀랜드식 라운드를 경험하고 싶은 골퍼에게 매력적입니다. 그린피가 합리적인 편입니다.",
    features: ["27홀", "링크스 코스", "합리적 그린피"],
    nearby: ["월출산 국립공원", "영암 무화과"],
  },
  {
    slug: "muju-deogyusan-cc",
    name: "무주 덕유산 컨트리클럽",
    regionSlug: "jeonbuk",
    city: "무주군",
    address: "전북 무주군 설천면",
    holes: 18,
    type: "대중제",
    greenFeeWeekday: 120000,
    greenFeeWeekend: 190000,
    openedYear: 1990,
    description:
      "덕유산 자락의 청정한 자연 속에 자리한 산악형 코스입니다. 무주 리조트와 연계되어 사계절 휴양 골프가 가능하고, 한적한 분위기에서 여유로운 라운드를 즐길 수 있습니다.",
    features: ["18홀", "산악형", "리조트 연계"],
    nearby: ["무주 리조트", "덕유산 향적봉", "무주 머루와인"],
  },

  // ── 경상 ──────────────────────────────────────────────
  {
    slug: "gyeongju-shilla-cc",
    name: "경주 신라 컨트리클럽",
    regionSlug: "gyeongbuk",
    city: "경주시",
    address: "경북 경주시 천북면",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 140000,
    greenFeeWeekend: 210000,
    openedYear: 1998,
    description:
      "천년 고도 경주에 위치해 역사 여행과 골프를 함께 즐기기 좋은 27홀 코스입니다. 완만한 구릉지에 조성되어 라운드 난도가 부담스럽지 않고, 보문관광단지와 가까워 가족·단체 여행 코스로 적합합니다.",
    features: ["27홀", "관광 연계", "완만한 코스"],
    nearby: ["보문관광단지", "불국사", "경주 황리단길"],
  },
  {
    slug: "cypress-cc-gimhae",
    name: "사이프러스 골프클럽 김해",
    regionSlug: "gyeongnam",
    city: "김해시",
    address: "경남 김해시 상동면",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 190000,
    greenFeeWeekend: 280000,
    openedYear: 2007,
    description:
      "낙동강을 굽어보는 구릉지에 설계된 명문 회원제 코스입니다. 부산·창원 도심에서 가까워 접근성이 뛰어나며, 정교한 코스 관리와 빠른 그린으로 정평이 나 있습니다.",
    features: ["18홀", "회원제", "강 조망", "부산권 접근성"],
    nearby: ["김해 가야테마파크", "봉하마을"],
  },

  // ── 부산 ──────────────────────────────────────────────
  {
    slug: "asiad-cc",
    name: "아시아드 컨트리클럽",
    regionSlug: "busan",
    city: "기장군",
    address: "부산 기장군 정관읍",
    holes: 36,
    type: "대중제",
    greenFeeWeekday: 170000,
    greenFeeWeekend: 260000,
    openedYear: 2002,
    featured: true,
    description:
      "부산 도심에서 가까운 36홀 대중제 코스로, 도시 골퍼들이 가장 즐겨 찾는 곳 중 하나입니다. 산악 지형을 살린 다이내믹한 홀 구성과 야간 라운드 시설을 갖추고 있어 퇴근 후 라운드 수요가 많습니다.",
    features: ["36홀", "대중제", "야간 라운드", "도심 근접"],
    nearby: ["해운대", "기장 대게", "오시리아 관광단지"],
  },
  {
    slug: "dongnae-benest",
    name: "동래베네스트 골프클럽",
    regionSlug: "busan",
    city: "금정구",
    address: "부산 금정구 회동동",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 220000,
    greenFeeWeekend: 320000,
    openedYear: 1971,
    description:
      "부산 도심 한가운데에 위치한 역사 깊은 회원제 코스입니다. 도시 접근성이 압도적으로 뛰어나며, 오랜 수령의 나무들이 어우러져 도심 속 휴식 같은 라운드를 제공합니다.",
    features: ["18홀", "회원제", "도심 위치"],
    nearby: ["회동수원지", "온천천", "동래 파전"],
  },

  // ── 대구 ──────────────────────────────────────────────
  {
    slug: "palgong-cc",
    name: "팔공 컨트리클럽",
    regionSlug: "daegu",
    city: "동구",
    address: "대구 동구 팔공산로",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 180000,
    greenFeeWeekend: 270000,
    openedYear: 1984,
    description:
      "팔공산 자락에 자리한 대구 대표 회원제 코스입니다. 산세를 따라 조성된 페어웨이가 시원하고, 도심에서 가까워 라운드 접근이 편리합니다. 분지 기후 특성상 겨울에도 라운드 가능일이 많습니다.",
    features: ["18홀", "회원제", "산악형", "겨울 라운드"],
    nearby: ["팔공산 갓바위", "동화사", "대구 막창"],
  },

  // ── 대전 ──────────────────────────────────────────────
  {
    slug: "daejeon-cc",
    name: "대전 컨트리클럽",
    regionSlug: "daejeon",
    city: "동구",
    address: "대전 동구 산내로",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 170000,
    greenFeeWeekend: 250000,
    openedYear: 1982,
    description:
      "대전 도심 근교의 전통 있는 회원제 코스로, 전국 어디서나 접근이 쉬운 교통 요지에 자리합니다. 완만한 구릉 코스라 라운드 부담이 적고, 비즈니스 라운드 수요가 꾸준합니다.",
    features: ["18홀", "회원제", "교통 요지"],
    nearby: ["대청호", "식장산", "대전 성심당"],
  },

  // ── 광주 ──────────────────────────────────────────────
  {
    slug: "gwangju-cc",
    name: "광주 컨트리클럽",
    regionSlug: "gwangju",
    city: "북구",
    address: "광주 북구 충효동",
    holes: 18,
    type: "대중제",
    greenFeeWeekday: 130000,
    greenFeeWeekend: 200000,
    openedYear: 1991,
    description:
      "무등산을 배경으로 한 광주 근교 대중제 코스입니다. 합리적인 그린피와 도심 접근성을 모두 갖춰 호남권 골퍼들에게 꾸준히 사랑받습니다. 남도 미식 여행과 함께 묶기 좋습니다.",
    features: ["18홀", "대중제", "합리적 그린피"],
    nearby: ["무등산 국립공원", "광주 양림동", "광주 떡갈비"],
  },

  // ── 울산 ──────────────────────────────────────────────
  {
    slug: "ulsan-cc",
    name: "울산 컨트리클럽",
    regionSlug: "ulsan",
    city: "울주군",
    address: "울산 울주군 청량읍",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 160000,
    greenFeeWeekend: 240000,
    openedYear: 1979,
    description:
      "영남알프스와 동해를 배경으로 한 울산 대표 회원제 코스입니다. 산업도시 특성상 평일 라운드 수요가 탄탄하며, 온화한 기후로 라운드 시즌이 깁니다.",
    features: ["18홀", "회원제", "긴 라운드 시즌"],
    nearby: ["간절곶", "영남알프스", "울산 언양불고기"],
  },

  // ── 제주 ──────────────────────────────────────────────
  {
    slug: "pinx-gc",
    name: "핀크스 골프클럽",
    regionSlug: "jeju",
    city: "서귀포시",
    address: "제주 서귀포시 안덕면",
    holes: 18,
    type: "대중제",
    greenFeeWeekday: 210000,
    greenFeeWeekend: 290000,
    openedYear: 1999,
    featured: true,
    description:
      "제주를 대표하는 명문 코스로, 세계 100대 코스에 이름을 올린 바 있습니다. 한라산과 오름, 바다를 한눈에 담는 빼어난 경관과 완벽에 가까운 코스 관리로 골퍼들의 버킷리스트로 꼽힙니다. 제주 골프 여행의 정점입니다.",
    features: ["18홀", "세계 100대 코스", "한라산 조망", "명문 코스"],
    nearby: ["산방산", "본태박물관", "중문관광단지"],
  },
  {
    slug: "club-nine-bridges",
    name: "클럽 나인브릿지",
    regionSlug: "jeju",
    city: "제주시",
    address: "제주 제주시 한경면",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 250000,
    greenFeeWeekend: 350000,
    openedYear: 2001,
    description:
      "PGA 투어가 개최된 국내 유일의 코스로, 세계적인 명성을 가진 프리미엄 회원제 클럽입니다. 곶자왈 원시림과 어우러진 코스는 자연 보존과 골프가 공존하는 모범 사례로 평가받습니다.",
    features: ["18홀", "회원제", "PGA 투어 개최", "곶자왈"],
    nearby: ["오설록 티뮤지엄", "협재 해수욕장", "한림공원"],
  },
  {
    slug: "the-classic-jeju",
    name: "더클래식 골프앤리조트 제주",
    regionSlug: "jeju",
    city: "서귀포시",
    address: "제주 서귀포시 표선면",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 180000,
    greenFeeWeekend: 260000,
    openedYear: 2010,
    description:
      "제주 동남부에 자리한 27홀 리조트형 코스로, 넓은 페어웨이와 시원한 바다 조망이 강점입니다. 숙박 시설을 함께 운영해 2박 3일 제주 골프 패키지로 즐기기 좋습니다.",
    features: ["27홀", "리조트형", "오션뷰", "숙박 연계"],
    nearby: ["성산일출봉", "섭지코지", "표선 해비치"],
  },

  // ── 서울 (연습·스크린 중심) ────────────────────────────
  {
    slug: "hangang-driving-range",
    name: "한강 골프 연습장",
    regionSlug: "seoul",
    city: "광진구",
    address: "서울 광진구 강변북로",
    holes: 0,
    type: "대중제",
    description:
      "서울 도심에서 라운드 전 스윙을 점검하기 좋은 대형 연습장입니다. 한강을 배경으로 한 타석에서 야간까지 연습이 가능하며, 직장인의 퇴근 후 연습 수요가 많습니다. 레슨 프로그램도 함께 운영됩니다.",
    features: ["연습장", "야간 운영", "한강 조망", "레슨"],
    nearby: ["뚝섬한강공원", "건대 먹자골목"],
  },

  // ── 보강 코스 (유명 코스 상세 정보) ──────────────────────
  {
    slug: "anyang-cc",
    name: "안양 컨트리클럽",
    regionSlug: "gyeonggi",
    city: "군포시",
    address: "경기 군포시 군포로 364",
    holes: 18,
    type: "회원제",
    openedYear: 1968,
    description:
      "삼성이 운영하는, 국내에서 가장 격식 있는 회원제 코스로 꼽힙니다. 코스라기보다 잘 가꾼 수목원에 가깝다는 말을 듣는데, 수십 년에 걸쳐 옮겨 심은 나무와 분재가 페어웨이 사이사이를 채우고 있어 '정원 같은 골프장'이라는 별명이 붙었습니다. 회원과 동반자 위주로 운영돼 일반 부킹은 사실상 열려 있지 않지만, 한국 골프장 관리의 기준을 세운 곳으로 한 번쯤 그 명성을 알아둘 만합니다.",
    features: ["18홀", "회원제", "명문 코스", "수목 정원형", "수도권 근접"],
    nearby: ["수리산 도립공원", "군포 철쭉동산", "안양예술공원"],
  },
  {
    slug: "haesley-nine-bridges",
    name: "해슬리 나인브릿지",
    regionSlug: "gyeonggi",
    city: "여주시",
    address: "경기 여주시 명품1로 76",
    holes: 18,
    type: "회원제",
    openedYear: 2009,
    description:
      "제주 클럽 나인브릿지의 자매 코스로, 개장과 동시에 세계 100대 코스 순위에 이름을 올렸습니다. 건축가 시게루 반이 설계한 목조 클럽하우스가 상징적인데, 나무 기둥이 우산살처럼 펼쳐진 천장은 그 자체로 보러 올 만한 작품입니다. 넓고 유려한 페어웨이와 흠잡을 데 없는 그린 관리로 정평이 나 있으며, 최상위 회원제로 운영됩니다.",
    features: ["18홀", "회원제", "세계 100대 코스", "시게루 반 클럽하우스"],
    nearby: ["여주 신륵사", "여주 프리미엄아울렛", "명성황후 생가"],
  },
  {
    slug: "konjiam-gc",
    name: "곤지암 골프클럽",
    regionSlug: "gyeonggi",
    city: "광주시",
    address: "경기 광주시 도척면 도척윗로 280",
    holes: 18,
    type: "회원제",
    description:
      "LG가 운영하는 경기 광주의 회원제 코스로, 곤지암 리조트와 같은 권역에 자리합니다. 산자락의 지형을 무리하게 깎지 않고 자연 그대로 살린 설계가 특징이라, 홀마다 숲에 안긴 듯한 느낌을 줍니다. 코스 관리 수준이 높아 조용하고 정갈한 라운드를 선호하는 골퍼들의 평이 좋습니다.",
    features: ["18홀", "회원제", "자연 친화 설계", "수도권 근교"],
    nearby: ["곤지암 리조트", "화담숲", "곤지암 소머리국밥"],
  },
  {
    slug: "hwasan-cc",
    name: "화산 컨트리클럽",
    regionSlug: "gyeonggi",
    city: "용인시",
    address: "경기 용인시 처인구 이동읍 화산로 239",
    holes: 18,
    type: "회원제",
    description:
      "용인 이동읍의 구릉지에 들어선 18홀 회원제 코스입니다. 에버랜드와 가까운 용인 남부권에 있어 수도권 남쪽에서 접근하기 편하고, 처인구 일대 다른 코스들과 묶어 라운드 일정을 짜기에도 좋은 위치입니다. 회원제로 운영되는 만큼 성수기 부킹은 일정을 미리 확인해 두는 편이 안전합니다.",
    features: ["18홀", "회원제", "용인 남부권", "수도권 접근성"],
    nearby: ["에버랜드", "용인 자연휴양림", "백암순대"],
  },
  {
    slug: "southcape-owners-club",
    name: "사우스케이프 오너스클럽",
    regionSlug: "gyeongnam",
    city: "남해군",
    address: "경남 남해군 창선면 흥선로 1545",
    holes: 18,
    type: "비회원제",
    openedYear: 2013,
    greenFeeWeekday: 350000,
    greenFeeWeekend: 450000,
    description:
      "남해 창선도 끝자락, 바다를 향해 떨어지는 절벽 위에 펼쳐진 코스입니다. 설계가 카일 필립스가 지형을 그대로 살려 만든 홀들은 한 라운드 내내 바다와 마주하게 하며, 특히 후반 해안 절벽 구간의 경관은 국내에서 손에 꼽힙니다. 세계 100대 코스에 오른 럭셔리 리조트로, 빌라 숙박과 함께 즐기는 골퍼가 많아 그린피는 높은 편입니다.",
    features: ["18홀", "시사이드 절벽 코스", "세계 100대 코스", "럭셔리 리조트"],
    nearby: ["남해 독일마을", "창선·삼천포대교", "남해 멸치쌈밥"],
  },
  {
    slug: "raon-gc-jeju",
    name: "라온 골프클럽",
    regionSlug: "jeju",
    city: "제주시",
    address: "제주 제주시 한경면 용금로 998",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 180000,
    greenFeeWeekend: 250000,
    description:
      "제주 서부 한경면에 자리한 27홀 대중제 코스로, 세 개 코스를 조합해 다양한 라운드 구성이 가능합니다. 비교적 평탄하고 페어웨이가 넓어 제주 여행 중 부담 없이 즐기기 좋고, 한라산과 서쪽 바다를 함께 조망할 수 있는 홀이 많습니다. 오설록·신창 풍차해안 등 서부 관광지와 동선이 맞아 가족 골프 여행 코스로 적합합니다.",
    features: ["27홀", "대중제", "넓은 페어웨이", "제주 서부"],
    nearby: ["오설록 티뮤지엄", "신창풍차해안", "한림공원"],
  },
  {
    slug: "blackstone-jeju",
    name: "블랙스톤 제주",
    regionSlug: "jeju",
    city: "제주시",
    address: "제주 제주시 한창로 925-122",
    holes: 18,
    type: "회원제",
    greenFeeWeekday: 200000,
    greenFeeWeekend: 280000,
    description:
      "제주의 검은 현무암에서 이름을 따온 코스로, 곶자왈 원시림과 오름 지형을 살려 설계했습니다. 검은 돌과 푸른 잔디가 대비를 이루는 풍경이 인상적이고, 한라산 중산간의 변화무쌍한 날씨가 라운드에 묘미를 더합니다. 회원제와 대중 라운드를 함께 운영해 제주 골프 여행객의 발길이 꾸준합니다.",
    features: ["18홀", "현무암 조경", "곶자왈", "제주 중산간"],
    nearby: ["새별오름", "한라산 어리목", "협재 해수욕장"],
  },
  {
    slug: "the-players-chuncheon",
    name: "더플레이어스 골프클럽",
    regionSlug: "gangwon",
    city: "춘천시",
    address: "강원 춘천시 동산면 새술막길 438",
    holes: 27,
    type: "대중제",
    greenFeeWeekday: 150000,
    greenFeeWeekend: 220000,
    description:
      "춘천 동산면 산지에 조성된 27홀 대중제 코스입니다. 서울 동북부에서 고속도로로 한 시간 남짓이면 닿아 수도권 골퍼들이 당일 라운드로 즐겨 찾고, 고저차를 살린 홀 구성이 단조롭지 않습니다. 라운드 후 남이섬이나 강촌, 춘천 닭갈비 골목으로 이어지는 여행 동선이 좋아 모임 골프에도 잘 어울립니다.",
    features: ["27홀", "대중제", "수도권 동북부", "당일 라운드"],
    nearby: ["남이섬", "강촌", "춘천 닭갈비 골목"],
  },
];

// 직접 작성한 시드 코스를 먼저 노출하고, 공공데이터 기반 목록을 뒤에 이어 붙입니다.
export const courses: GolfCourse[] = [...seedCourses, ...importedCourses];

export const courseMap = new Map(courses.map((c) => [c.slug, c]));

export function getCourse(slug: string): GolfCourse | undefined {
  return courseMap.get(slug);
}

export function getCoursesByRegion(regionSlug: string): GolfCourse[] {
  return courses.filter((c) => c.regionSlug === regionSlug);
}

export function getFeaturedCourses(): GolfCourse[] {
  return courses.filter((c) => c.featured);
}

export function countByRegion(regionSlug: string): number {
  return courses.reduce((n, c) => (c.regionSlug === regionSlug ? n + 1 : n), 0);
}
