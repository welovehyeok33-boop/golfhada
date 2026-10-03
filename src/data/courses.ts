import type { GolfCourse } from "@/types";
import { importedCourses } from "./courses.imported";
import { getCourseNote } from "./courseNotes";

// 코스 기본 정보. 변동 조건은 공식 예약 안내를 확인합니다.
const seedCourses: GolfCourse[] = [
  {
    "slug": "lakeside-cc",
    "name": "레이크사이드 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "용인시",
    "address": "경기 용인시 처인구 모현읍",
    "holes": 54,
    "type": "코스별 상이",
    "openedYear": 1990,
    "featured": true,
    "description": "용인에 있는 동·남·서 3개 코스, 총 54홀 골프장입니다. 공식 FAQ는 동·남 코스를 대중제, 서 코스를 회원제로 구분합니다. 예약할 때 코스명과 예약 자격을 먼저 확인하고, 요금·취소 규정을 해당 코스의 안내와 함께 읽어 주세요.",
    "features": [
      "54홀",
      "동·남 대중제",
      "서 회원제",
      "용인 권역"
    ],
    "nearby": [
      "에버랜드",
      "한국민속촌",
      "용인 백암순대"
    ],
    "website": "https://www.lakeside.kr/"
  },
  {
    "slug": "bear-creek-pocheon",
    "name": "베어크리크 포천",
    "regionSlug": "gyeonggi",
    "city": "포천시",
    "address": "경기도 포천시 — 상세 도착지는 예약 안내에서 확인",
    "holes": 36,
    "type": "대중제",
    "description": "베어크리크 포천 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 포천 예약과 다른 지점 구분, 단풍 사진으로 날짜를 정하기 전에, 포천 관광을 더할 때의 계산 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "36홀",
      "대중제"
    ]
  },
  {
    "slug": "namseoul-cc",
    "name": "남서울 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "성남시",
    "address": "경기도 성남시 분당구 판교백현로 161",
    "holes": 18,
    "type": "회원제",
    "description": "남서울 컨트리클럽은 성남시 분당구에 있는 18홀 회원제 골프장입니다. 공식 클럽 소개는 개장 연도를 1971년으로 안내합니다. 예약 방법·요금·코스별 안내는 공식 홈페이지에서 확인하고, 행사 개최 이력과 일반 방문일의 운영 조건을 구분해 준비하세요.",
    "features": [
      "18홀",
      "회원제"
    ],
    "openedYear": 1971,
    "website": "https://www.nscc.co.kr/"
  },
  {
    "slug": "sky72-ocean",
    "name": "클럽72 오션코스",
    "regionSlug": "incheon",
    "city": "중구",
    "address": "인천 중구 영종도",
    "holes": 18,
    "type": "대중제",
    "openedYear": 2005,
    "featured": true,
    "description": "영종도에 있는 클럽72의 오션코스입니다. 옛 스카이72라는 명칭이 남아 있는 자료와 현재 클럽72의 안내를 구분해야 합니다. 오션코스는 18홀이며 단지 전체 홀 수와 혼동하지 마세요. 예약 화면에서 오션코스를 선택했는지 확인하고 다른 코스의 야간 운영 조건을 그대로 적용하지 마세요.",
    "features": [
      "오션 18홀",
      "영종도",
      "코스 선택 확인",
      "공식 예약 확인"
    ],
    "nearby": [
      "인천공항",
      "을왕리 해수욕장",
      "영종도 조개구이"
    ],
    "website": "https://onetheclub.com/club72/main"
  },
  {
    "slug": "bears-best-cheongna",
    "name": "베어즈베스트 청라",
    "regionSlug": "incheon",
    "city": "서구",
    "address": "인천 서구 청라동",
    "holes": 27,
    "type": "대중제",
    "description": "베어즈베스트 청라 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 코스 이름을 정확히 공유하기, 코스 이야기는 선택할 수 있는 화제로, 청라와 송도를 한 장소처럼 묶지 않기 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "대중제"
    ]
  },
  {
    "slug": "phoenix-cc",
    "name": "휘닉스 컨트리클럽",
    "regionSlug": "gangwon",
    "city": "평창군",
    "address": "강원 평창군 봉평면",
    "holes": 18,
    "type": "공식 안내 확인",
    "openedYear": 2004,
    "featured": true,
    "description": "평창 휘닉스 파크의 18홀 컨트리클럽입니다. 같은 리조트의 태기산 CC와 구분해 예약하고, 골프와 숙박 상품의 포함 항목 및 변경 규정을 각각 확인하세요.",
    "features": [
      "18홀",
      "휘닉스 CC",
      "코스명 확인",
      "예약 조건 확인"
    ],
    "nearby": [
      "휘닉스 평창",
      "이효석 메밀밭",
      "봉평 메밀국수"
    ],
    "website": "https://phoenixhnr.co.kr/static/pyeongchang/golf/phoenix-guide"
  },
  {
    "slug": "oak-valley-cc",
    "name": "오크밸리 컨트리클럽",
    "regionSlug": "gangwon",
    "city": "원주시",
    "address": "강원 원주시 지정면",
    "holes": 36,
    "type": "회원제",
    "description": "오크밸리 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 골프 예약과 리조트 예약 연결, 골프를 하지 않는 동행자의 일정, 체크아웃과 라운드가 겹친다면 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "36홀",
      "회원제"
    ],
    "website": "https://ipark-golf.com/oakvalley/booking-information"
  },
  {
    "slug": "woojung-hills-cc",
    "name": "우정힐스 컨트리클럽",
    "regionSlug": "chungnam",
    "city": "천안시",
    "address": "충남 천안시 동남구",
    "holes": 18,
    "type": "회원제",
    "featured": true,
    "description": "우정힐스 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 대회 코스라는 이름보다 이용 조건, 실력 차이가 있는 팀의 준비, 천안에서 만나는 장소 정하기 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "golden-bay-cc",
    "name": "골든베이 골프앤리조트",
    "regionSlug": "chungnam",
    "city": "태안군",
    "address": "충남 태안군 고남면",
    "holes": 27,
    "type": "대중제",
    "openedYear": 2014,
    "description": "서해 바다를 마주한 27홀 시사이드 코스로, 일몰 무렵 라운드의 경관이 특히 아름답습니다. 바닷바람의 영향을 직접 받는 링크스 스타일 홀이 있어 색다른 공략 재미를 줍니다. 태안 해변 여행과 묶기 좋습니다.",
    "features": [
      "27홀",
      "시사이드",
      "일몰 명소"
    ],
    "nearby": [
      "꽃지 해수욕장",
      "안면도 자연휴양림",
      "태안 대하구이"
    ]
  },
  {
    "slug": "south-links-yeongam",
    "name": "골프존카운티 영암45",
    "regionSlug": "jeonnam",
    "city": "영암군",
    "address": "전남 영암군 삼호읍 에프원로 121-1",
    "holes": 45,
    "type": "대중제",
    "openedYear": 2008,
    "description": "옛 사우스링스 영암은 현재 골프존카운티 영암45로 운영됩니다. 전체 45홀은 짐앵 코스 27홀과 카일 코스 18홀로 구성됩니다. 공식 안내의 코스별 플레이 인원과 카트 조건을 구분해 예약하세요.",
    "features": [
      "전체 45홀",
      "짐앵 27홀",
      "카일 18홀",
      "셀프 라운드 조건 확인"
    ],
    "nearby": [
      "월출산 국립공원",
      "영암 무화과"
    ],
    "website": "https://www.golfzoncounty.com/golfclub/intro?golfclubSeq=59"
  },
  {
    "slug": "muju-deogyusan-cc",
    "name": "무주 덕유산 컨트리클럽",
    "regionSlug": "jeonbuk",
    "city": "무주군",
    "address": "전북 무주군 설천면",
    "holes": 18,
    "type": "대중제",
    "description": "무주 덕유산 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 무주 숙박 일정과 골프를 나눠 보기, 예보를 보는 위치와 시간, 숙소를 정하기 전 확인할 이동 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "대중제"
    ]
  },
  {
    "slug": "gyeongju-shilla-cc",
    "name": "경주 신라 컨트리클럽",
    "regionSlug": "gyeongbuk",
    "city": "경주시",
    "address": "경북 경주시 보문로 319",
    "holes": 36,
    "type": "공식 안내 확인",
    "openedYear": 1998,
    "description": "경주 보문관광단지의 경주신라 컨트리클럽입니다. 천마·화랑 코스를 구분해 예약하고, 골프장 전체 36홀과 예약한 라운드의 실제 이용 홀 수를 구분하세요. 일반·야간·셀프 이용의 조건은 공식 공지에서 각각 확인해야 합니다.",
    "features": [
      "전체 36홀",
      "천마·화랑 코스",
      "경주 보문권",
      "운영 방식 확인"
    ],
    "nearby": [
      "보문관광단지",
      "불국사",
      "경주 황리단길"
    ],
    "website": "https://www.sillacc.co.kr/"
  },
  {
    "slug": "cypress-cc-gimhae",
    "name": "사이프러스 골프클럽 김해",
    "regionSlug": "gyeongnam",
    "city": "김해시",
    "address": "경남 김해시 상동면",
    "holes": 18,
    "type": "회원제",
    "openedYear": 2007,
    "description": "낙동강을 굽어보는 구릉지에 설계된 명문 회원제 코스입니다. 부산·창원 도심에서 가까워 접근성이 뛰어나며, 정교한 코스 관리와 빠른 그린으로 정평이 나 있습니다.",
    "features": [
      "18홀",
      "회원제",
      "강 조망",
      "부산권 접근성"
    ],
    "nearby": [
      "김해 가야테마파크",
      "봉하마을"
    ]
  },
  {
    "slug": "asiad-cc",
    "name": "아시아드 컨트리클럽",
    "regionSlug": "busan",
    "city": "기장군",
    "address": "부산 기장군 일광읍 차양길 26",
    "holes": 27,
    "type": "공식 안내 확인",
    "openedYear": 2002,
    "featured": true,
    "description": "부산 기장군 일광읍의 27홀 골프장입니다. 공식 홈페이지에서 코스 소개와 예약·운영 공지를 확인할 수 있습니다. 대회 일정이나 운영 변경 공지가 있는지 살펴보고 방문 날짜에 적용되는 티타임과 캐디피를 확인하세요.",
    "features": [
      "27홀",
      "부산 기장",
      "공식 코스 안내",
      "운영 공지 확인"
    ],
    "nearby": [
      "해운대",
      "기장 대게",
      "오시리아 관광단지"
    ],
    "website": "https://www.asiadcc.co.kr/"
  },
  {
    "slug": "dongnae-benest",
    "name": "동래베네스트 골프클럽",
    "regionSlug": "busan",
    "city": "금정구",
    "address": "부산 금정구 회동동",
    "holes": 18,
    "type": "회원제",
    "openedYear": 1971,
    "description": "부산 도심 한가운데에 위치한 역사 깊은 회원제 코스입니다. 도시 접근성이 압도적으로 뛰어나며, 오랜 수령의 나무들이 어우러져 도심 속 휴식 같은 라운드를 제공합니다.",
    "features": [
      "18홀",
      "회원제",
      "도심 위치"
    ],
    "nearby": [
      "회동수원지",
      "온천천",
      "동래 파전"
    ]
  },
  {
    "slug": "palgong-cc",
    "name": "팔공 컨트리클럽",
    "regionSlug": "daegu",
    "city": "동구",
    "address": "대구 동구 팔공산로",
    "holes": 18,
    "type": "회원제",
    "description": "팔공 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 팔공산 관광과 골프 예약의 구분, 공동 출발이 꼭 편한 것은 아닙니다, 첫 방문자가 받아야 할 안내 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "daejeon-cc",
    "name": "대전 컨트리클럽",
    "regionSlug": "daejeon",
    "city": "동구",
    "address": "대전 동구 산내로",
    "holes": 18,
    "type": "회원제",
    "openedYear": 1982,
    "description": "대전 도심 근교의 전통 있는 회원제 코스로, 전국 어디서나 접근이 쉬운 교통 요지에 자리합니다. 완만한 구릉 코스라 라운드 부담이 적고, 비즈니스 라운드 수요가 꾸준합니다.",
    "features": [
      "18홀",
      "회원제",
      "교통 요지"
    ],
    "nearby": [
      "대청호",
      "식장산",
      "대전 성심당"
    ]
  },
  {
    "slug": "gwangju-cc",
    "name": "광주 컨트리클럽",
    "regionSlug": "gwangju",
    "city": "북구",
    "address": "광주 북구 충효동",
    "holes": 18,
    "type": "대중제",
    "openedYear": 1991,
    "description": "무등산을 배경으로 한 광주 근교 대중제 코스입니다. 합리적인 그린피와 도심 접근성을 모두 갖춰 호남권 골퍼들에게 꾸준히 사랑받습니다. 남도 미식 여행과 함께 묶기 좋습니다.",
    "features": [
      "18홀",
      "대중제",
      "합리적 그린피"
    ],
    "nearby": [
      "무등산 국립공원",
      "광주 양림동",
      "광주 떡갈비"
    ]
  },
  {
    "slug": "ulsan-cc",
    "name": "울산 컨트리클럽",
    "regionSlug": "ulsan",
    "city": "울주군",
    "address": "울산 울주군 청량읍",
    "holes": 27,
    "type": "회원제",
    "openedYear": 1979,
    "description": "영남알프스와 동해를 배경으로 한 울산 대표 회원제 코스입니다. 산업도시 특성상 평일 라운드 수요가 탄탄하며, 온화한 기후로 라운드 시즌이 깁니다.",
    "features": [
      "27홀",
      "회원제",
      "울주군",
      "예약 조건 확인"
    ],
    "nearby": [
      "간절곶",
      "영남알프스",
      "울산 언양불고기"
    ],
    "website": "https://www.ulsancc.co.kr/"
  },
  {
    "slug": "pinx-gc",
    "name": "핀크스 골프클럽",
    "regionSlug": "jeju",
    "city": "서귀포시",
    "address": "제주 서귀포시 안덕면",
    "holes": 27,
    "type": "코스별 상이",
    "openedYear": 1999,
    "featured": true,
    "description": "제주 서귀포시 안덕면의 핀크스 골프클럽입니다. 제주관광공사의 소개는 전체 코스를 27홀로 안내합니다. 전체 규모와 실제 예약한 코스 구성을 구분하고, 비회원 이용 가능 여부·숙박 상품의 포함 조건·예약 변경 기한을 공식 채널에서 확인하세요.",
    "features": [
      "전체 27홀",
      "제주 서귀포",
      "예약 코스 확인",
      "코스별 조건 확인"
    ],
    "nearby": [
      "산방산",
      "본태박물관",
      "중문관광단지"
    ],
    "website": "https://pinxgc.thepinx.co.kr/p/Course"
  },
  {
    "slug": "club-nine-bridges",
    "name": "클럽 나인브릿지",
    "regionSlug": "jeju",
    "city": "제주시",
    "address": "제주 제주시 한경면",
    "holes": 18,
    "type": "회원제",
    "description": "클럽 나인브릿지 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 초대받은 경우에도 확인할 예약 정보, 같은 이름의 골프장 구분, 제주 귀가편 앞에 남길 시간 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "the-classic-jeju",
    "name": "더클래식 골프앤리조트 제주",
    "regionSlug": "jeju",
    "city": "서귀포시",
    "address": "제주 서귀포시 표선면",
    "holes": 27,
    "type": "대중제",
    "openedYear": 2010,
    "description": "제주 동남부에 자리한 27홀 리조트형 코스로, 넓은 페어웨이와 시원한 바다 조망이 강점입니다. 숙박 시설을 함께 운영해 2박 3일 제주 골프 패키지로 즐기기 좋습니다.",
    "features": [
      "27홀",
      "리조트형",
      "오션뷰",
      "숙박 연계"
    ],
    "nearby": [
      "성산일출봉",
      "섭지코지",
      "표선 해비치"
    ]
  },
  {
    "slug": "hangang-driving-range",
    "name": "한강 골프 연습장",
    "regionSlug": "seoul",
    "city": "광진구",
    "address": "서울 광진구 강변북로",
    "holes": 0,
    "type": "대중제",
    "description": "서울 도심에서 라운드 전 스윙을 점검하기 좋은 대형 연습장입니다. 한강을 배경으로 한 타석에서 야간까지 연습이 가능하며, 직장인의 퇴근 후 연습 수요가 많습니다. 레슨 프로그램도 함께 운영됩니다.",
    "features": [
      "연습장",
      "야간 운영",
      "한강 조망",
      "레슨"
    ],
    "nearby": [
      "뚝섬한강공원",
      "건대 먹자골목"
    ]
  },
  {
    "slug": "anyang-cc",
    "name": "안양 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "군포시",
    "address": "경기 군포시 군포로 364",
    "holes": 18,
    "type": "회원제",
    "description": "안양 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 방문 권한과 예약 확정을 먼저, 초대받은 사람에게 부담을 남기지 않기, 업무 목적이라면 별도 확인 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "haesley-nine-bridges",
    "name": "해슬리 나인브릿지",
    "regionSlug": "gyeonggi",
    "city": "여주시",
    "address": "경기 여주시 명품1로 76",
    "holes": 18,
    "type": "회원제",
    "description": "해슬리 나인브릿지 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 정확한 지점명으로 일정 공유, 이용 조건과 비용의 확인 순서, 여주에서 출발과 귀가를 따로 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "konjiam-gc",
    "name": "곤지암 골프클럽",
    "regionSlug": "gyeonggi",
    "city": "광주시",
    "address": "경기 광주시 도척면 도척윗로 280",
    "holes": 18,
    "type": "회원제",
    "description": "곤지암 골프클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 골프와 숙박 상품을 따로 읽기, 아침 일정을 한 줄로 만들기, 모임의 분위기를 예약 조건으로 바꾸기 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "hwasan-cc",
    "name": "화산 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "용인시",
    "address": "경기 용인시 처인구 이동읍 화산로 239",
    "holes": 18,
    "type": "회원제",
    "description": "용인 이동읍의 구릉지에 들어선 18홀 회원제 코스입니다. 에버랜드와 가까운 용인 남부권에 있어 수도권 남쪽에서 접근하기 편하고, 처인구 일대 다른 코스들과 묶어 라운드 일정을 짜기에도 좋은 위치입니다. 회원제로 운영되는 만큼 성수기 부킹은 일정을 미리 확인해 두는 편이 안전합니다.",
    "features": [
      "18홀",
      "회원제",
      "용인 남부권",
      "수도권 접근성"
    ],
    "nearby": [
      "에버랜드",
      "용인 자연휴양림",
      "백암순대"
    ]
  },
  {
    "slug": "southcape-owners-club",
    "name": "사우스케이프 오너스클럽",
    "regionSlug": "gyeongnam",
    "city": "남해군",
    "address": "경남 남해군 창선면 흥선로 1545",
    "holes": 18,
    "type": "비회원제",
    "description": "사우스케이프 오너스클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 남해 이동은 왕복으로 계획하기, 경관 사진과 당일 조건을 구분, 숙박 결합 상품의 견적 읽기 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "비회원제"
    ]
  },
  {
    "slug": "raon-gc-jeju",
    "name": "라온 골프클럽",
    "regionSlug": "jeju",
    "city": "제주시",
    "address": "제주 제주시 한경면 용금로 998",
    "holes": 27,
    "type": "대중제",
    "description": "제주 서부 한경면에 자리한 27홀 대중제 코스로, 세 개 코스를 조합해 다양한 라운드 구성이 가능합니다. 비교적 평탄하고 페어웨이가 넓어 제주 여행 중 부담 없이 즐기기 좋고, 한라산과 서쪽 바다를 함께 조망할 수 있는 홀이 많습니다. 오설록·신창 풍차해안 등 서부 관광지와 동선이 맞아 가족 골프 여행 코스로 적합합니다.",
    "features": [
      "27홀",
      "대중제",
      "넓은 페어웨이",
      "제주 서부"
    ],
    "nearby": [
      "오설록 티뮤지엄",
      "신창풍차해안",
      "한림공원"
    ]
  },
  {
    "slug": "blackstone-jeju",
    "name": "블랙스톤 제주",
    "regionSlug": "jeju",
    "city": "제주시",
    "address": "제주 제주시 한림읍 한창로 925-122",
    "holes": 27,
    "type": "회원제",
    "description": "제주 한림읍에 있는 블랙스톤 제주입니다. 공식 소개는 북·남·동 3개 코스, 전체 27홀로 안내합니다. 단지 전체 규모와 상품의 실제 이용 홀 수를 구분하고 회원·비회원의 예약 및 요금 조건을 공식 채널에서 확인하세요.",
    "features": [
      "전체 27홀",
      "북·남·동 코스",
      "제주 한림읍",
      "예약 조건 확인"
    ],
    "nearby": [
      "새별오름",
      "한라산 어리목",
      "협재 해수욕장"
    ],
    "website": "https://www.blackstoneresort.com/jj/aboutList?section=fare"
  },
  {
    "slug": "the-players-chuncheon",
    "name": "더플레이어스 골프클럽",
    "regionSlug": "gangwon",
    "city": "춘천시",
    "address": "강원 춘천시 동산면 새술막길 438",
    "holes": 27,
    "type": "대중제",
    "description": "춘천 동산면 산지에 조성된 27홀 대중제 코스입니다. 서울 동북부에서 고속도로로 한 시간 남짓이면 닿아 수도권 골퍼들이 당일 라운드로 즐겨 찾고, 고저차를 살린 홀 구성이 단조롭지 않습니다. 라운드 후 남이섬이나 강촌, 춘천 닭갈비 골목으로 이어지는 여행 동선이 좋아 모임 골프에도 잘 어울립니다.",
    "features": [
      "27홀",
      "대중제",
      "수도권 동북부",
      "당일 라운드"
    ],
    "nearby": [
      "남이섬",
      "강촌",
      "춘천 닭갈비 골목"
    ]
  },
  {
    "slug": "whistling-rock-cc",
    "name": "휘슬링락 컨트리클럽",
    "regionSlug": "gangwon",
    "city": "춘천시",
    "address": "강원 춘천시 남산면 동촌로 501",
    "holes": 27,
    "type": "회원제",
    "description": "휘슬링락 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 소개 문구보다 예약한 코스 정보, 처음 모이는 팀의 연락 역할, 춘천 식사 일정을 붙일 때 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "회원제"
    ]
  },
  {
    "slug": "jade-palace-gc",
    "name": "제이드팰리스 골프클럽",
    "regionSlug": "gangwon",
    "city": "춘천시",
    "address": "강원 춘천시 남산면 경춘로 212-30",
    "holes": 18,
    "type": "회원제",
    "description": "제이드팰리스 골프클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 플레이 계획은 공식 홀 안내부터, 동반자의 준비 수준 맞추기, 춘천 관광을 함께 원한다면 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "vision-hills-cc",
    "name": "비전힐스 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "남양주시",
    "address": "경기 남양주시 화도읍 마치로 226-220",
    "holes": 18,
    "type": "회원제",
    "description": "비전힐스 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 거리보다 플레이 선택을 준비, 초보 동반자에게 필요한 질문, 도착 시각을 다시 계산하기 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "ananti-club-seoul",
    "name": "아난티 클럽 서울",
    "regionSlug": "gyeonggi",
    "city": "가평군",
    "address": "경기 가평군 설악면 유명로 961-34",
    "holes": 27,
    "type": "회원제",
    "description": "아난티 클럽 서울 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 서울이라는 이름과 실제 주소, 회원·동반 조건 확인, 식사 공간을 중요한 조건으로 삼는다면 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "회원제"
    ]
  },
  {
    "slug": "east-valley-cc",
    "name": "이스트밸리 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "광주시",
    "address": "경기 광주시 곤지암읍 건업길 195",
    "holes": 27,
    "type": "회원제",
    "description": "이스트밸리 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 이스트밸리 예약 내역 읽기, 비용 안내의 단위 맞추기, 곤지암권 식사와 귀가 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "회원제"
    ]
  },
  {
    "slug": "lexfield-cc",
    "name": "렉스필드 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "여주시",
    "address": "경기 여주시 산북면 광여로 1115",
    "holes": 18,
    "type": "회원제",
    "description": "여주 산북면의 산악 지형에 조성된 18홀 회원제 코스로, 정교한 관리와 격조 있는 분위기로 손꼽히는 명문 클럽입니다. 홀마다 고저차와 굴곡이 살아 있어 전략적인 공략이 필요하고, 회원 위주로 운영돼 한적하고 여유로운 라운드를 즐길 수 있습니다.",
    "features": [
      "18홀",
      "회원제",
      "명문 코스",
      "산악형"
    ],
    "nearby": [
      "여주 신륵사",
      "여주 프리미엄아울렛",
      "이천 도자기마을"
    ]
  },
  {
    "slug": "pine-beach-golf-links",
    "name": "파인비치 골프링크스",
    "regionSlug": "jeonnam",
    "city": "해남군",
    "address": "전남 해남군 화원면 시아로 224",
    "holes": 18,
    "type": "대중제",
    "description": "파인비치 골프링크스 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 해남 골프 여행의 첫날과 마지막 날, 바닷가 사진만으로 장비를 고르지 않기, 숙박·차량·라운드 총액 비교 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "대중제"
    ]
  },
  {
    "slug": "sagewood-yeosu-gyeongdo",
    "name": "세이지우드 여수경도",
    "regionSlug": "jeonnam",
    "city": "여수시",
    "address": "전남 여수시 대경도길 111",
    "holes": 27,
    "type": "대중제",
    "description": "여수 앞바다의 섬 경도에 조성된 27홀 대중제 리조트 코스입니다. 다도해와 여수 시내 야경을 함께 품는 입지가 강점으로, 바다를 향해 떨어지는 홀들이 시원한 경관을 선사합니다. 숙박·해상 케이블카 등 관광 인프라와 묶여 여수 골프 여행지로 떠오르고 있습니다.",
    "features": [
      "27홀",
      "대중제",
      "오션뷰",
      "리조트형"
    ],
    "nearby": [
      "여수 밤바다",
      "오동도",
      "여수 게장백반"
    ]
  },
  {
    "slug": "grand-cc-cheongju",
    "name": "그랜드 컨트리클럽",
    "regionSlug": "chungbuk",
    "city": "청주시",
    "address": "충북 청주시 오창읍 꽃화산길 14",
    "holes": 27,
    "type": "회원제",
    "description": "그랜드 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 청주권 모임의 집결 방식, 같은 코스로 비교하고 있는지, 당일 모임과 숙박 모임 선택 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "회원제"
    ]
  },
  {
    "slug": "ananti-jungang-jincheon",
    "name": "아난티 중앙 골프클럽",
    "regionSlug": "chungbuk",
    "city": "진천군",
    "address": "충북 진천군 백곡면 배티로 818-105",
    "holes": 27,
    "type": "회원제",
    "description": "진천 백곡면 산자락에 들어선 27홀 회원제 코스로, 리조트 브랜드 아난티가 운영합니다. 깊은 산세에 둘러싸여 한적하고 차분한 분위기에서 라운드를 즐길 수 있으며, 수도권 남부와 충청권 양쪽에서 접근이 가능한 입지입니다.",
    "features": [
      "27홀",
      "회원제",
      "산악형",
      "충청권"
    ],
    "nearby": [
      "진천 농다리",
      "보탑사",
      "초평호"
    ]
  },
  {
    "slug": "imperial-lake-chungju",
    "name": "임페리얼레이크 컨트리클럽",
    "regionSlug": "chungbuk",
    "city": "충주시",
    "address": "충북 충주시 금가면 다래울길 52",
    "holes": 18,
    "type": "대중제",
    "description": "충주 금가면의 18홀 대중제 코스로, 이름처럼 물을 활용한 홀 구성이 특징입니다. 수도권에서 두 시간 안팎으로 닿는 충주권 가성비 코스라 단체 라운드 수요가 많고, 충주호·수안보 온천과 묶어 1박 골프 여행으로 즐기기 좋습니다.",
    "features": [
      "18홀",
      "대중제",
      "가성비",
      "충주권"
    ],
    "nearby": [
      "충주호",
      "수안보 온천",
      "충주 사과"
    ]
  },
  {
    "slug": "sejong-emerson-cc",
    "name": "세종 에머슨 컨트리클럽",
    "regionSlug": "sejong",
    "city": "세종특별자치시",
    "address": "세종특별자치시 전의면 운주산로 1510",
    "holes": 27,
    "type": "회원제",
    "description": "세종 에머슨 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 세종 모임의 초대 절차, 행정기관 방문과 라운드를 엮을 때, 각자 결제하는 모임의 준비 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "회원제"
    ]
  },
  {
    "slug": "sejong-raycastle",
    "name": "세종 레이캐슬 골프&리조트",
    "regionSlug": "sejong",
    "city": "세종특별자치시",
    "address": "세종특별자치시 전의면 의당전의로 252",
    "holes": 27,
    "type": "대중제",
    "description": "세종 전의면의 27홀 대중제 리조트 코스로, 회원권 없이 누구나 예약할 수 있어 충청권 골퍼들이 즐겨 찾습니다. 숙박 시설을 함께 운영해 가족·단체 골프 여행지로 활용도가 높고, 세종 신도시와 가까워 접근이 편리합니다.",
    "features": [
      "27홀",
      "대중제",
      "리조트형",
      "세종 근교"
    ],
    "nearby": [
      "세종호수공원",
      "국립세종수목원",
      "조치원 전통시장"
    ]
  },
  {
    "slug": "yuseong-cc",
    "name": "유성 컨트리클럽",
    "regionSlug": "daejeon",
    "city": "유성구",
    "address": "대전 유성구 현충원로 200",
    "holes": 18,
    "type": "회원제",
    "description": "유성 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 대전 시내 일정과 라운드 구분, 온천·숙박은 선택 일정으로, 예약자가 전달할 한 장의 안내 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "guni-cc",
    "name": "구니 컨트리클럽",
    "regionSlug": "daegu",
    "city": "군위군",
    "address": "대구 군위군 군위읍 도군로 2450",
    "holes": 18,
    "type": "대중제",
    "description": "대구로 편입된 군위군에 자리한 18홀 대중제 코스입니다. 회원권 없이 예약할 수 있어 대구·경북권 골퍼들의 가성비 라운드 장소로 인기가 있고, 한적한 농촌 풍경 속에서 여유로운 라운드를 즐길 수 있습니다.",
    "features": [
      "18홀",
      "대중제",
      "가성비",
      "대구·경북권"
    ],
    "nearby": [
      "군위 화본역",
      "한밤마을 돌담길",
      "군위 삼국유사테마파크"
    ]
  },
  {
    "slug": "eodeungsan-cc",
    "name": "어등산 컨트리클럽",
    "regionSlug": "gwangju",
    "city": "광산구",
    "address": "광주 광산구 무진대로 31",
    "holes": 27,
    "type": "대중제",
    "description": "어등산 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 광주권 당일 라운드의 시간표, 비용을 낮추려면 조건도 함께, 초보와 경험자가 함께할 때 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "대중제"
    ]
  },
  {
    "slug": "baystars-cc",
    "name": "베이스타즈 컨트리클럽",
    "regionSlug": "ulsan",
    "city": "북구",
    "address": "울산 북구 미포산업로 800",
    "holes": 18,
    "type": "대중제",
    "description": "울산 북구에 자리한 18홀 대중제 코스로, 동해 바다와 가까운 입지가 특징입니다. 울산·포항 산업단지 배후 수요가 탄탄해 평일 라운드가 활발하고, 온화한 동해안 기후 덕에 라운드 가능 시즌이 긴 편입니다.",
    "features": [
      "18홀",
      "대중제",
      "동해 인근",
      "긴 라운드 시즌"
    ],
    "nearby": [
      "강동·주전 몽돌해변",
      "울산대교 전망대",
      "정자항 대게"
    ]
  },
  {
    "slug": "gunsan-cc",
    "name": "군산 컨트리클럽",
    "regionSlug": "jeonbuk",
    "city": "군산시",
    "address": "전북 군산시 옥서면 남산군로 1685",
    "holes": 81,
    "type": "대중제",
    "description": "군산 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 단지 전체와 예약 코스는 다릅니다, 단체 예약의 인원 변경 관리, 여러 팀이 함께 식사할 때 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "81홀",
      "대중제"
    ]
  },
  {
    "slug": "iksan-cc",
    "name": "익산 컨트리클럽",
    "regionSlug": "jeonbuk",
    "city": "익산시",
    "address": "전북 익산시 무왕로38길 111",
    "holes": 18,
    "type": "대중제",
    "description": "익산 도심에서 가까운 18홀 대중제 코스로, 전북 북부권 골퍼들이 부담 없이 찾는 생활 밀착형 코스입니다. 완만한 지형이라 라운드 난도가 높지 않고, KTX 익산역과 가까워 타지에서 기차로 접근하기에도 편리합니다.",
    "features": [
      "18홀",
      "대중제",
      "도심 근접",
      "완만한 코스"
    ],
    "nearby": [
      "익산 미륵사지",
      "왕궁리 유적",
      "익산 황등비빔밥"
    ]
  },
  {
    "slug": "mauna-ocean-cc",
    "name": "마우나오션 컨트리클럽",
    "regionSlug": "gyeongbuk",
    "city": "경주시",
    "address": "경북 경주시 양남면 동남로 982",
    "holes": 18,
    "type": "회원제",
    "description": "경주 양남면, 동해와 가까운 구릉지에 조성된 18홀 회원제 리조트 코스입니다. 바다와 산을 함께 조망하는 입지가 강점이며, 리조트 숙박과 연계해 경주·울산권 골프 여행 코스로 활용됩니다. 온화한 동해안 기후로 사계절 라운드가 가능합니다.",
    "features": [
      "18홀",
      "회원제",
      "리조트형",
      "동해 조망"
    ],
    "nearby": [
      "경주 양남 주상절리",
      "문무대왕릉",
      "감포항"
    ]
  },
  {
    "slug": "bomun-gc",
    "name": "보문 골프클럽",
    "regionSlug": "gyeongbuk",
    "city": "경주시",
    "address": "경북 경주시 보문로 182-14",
    "holes": 18,
    "type": "대중제",
    "description": "경주 보문관광단지 안에 자리한 18홀 대중제 코스입니다. 라운드와 경주 역사 여행을 한 번에 즐길 수 있는 입지가 가장 큰 매력으로, 보문호를 끼고 도는 완만한 코스라 가족·단체 라운드에 잘 어울립니다. 숙박·관광 인프라가 단지 안에 모여 있어 동선이 편합니다.",
    "features": [
      "18홀",
      "대중제",
      "관광단지 내",
      "완만한 코스"
    ],
    "nearby": [
      "보문호",
      "불국사",
      "경주 황리단길"
    ]
  },
  {
    "slug": "gapyeong-benest-gc",
    "name": "가평베네스트 골프클럽",
    "regionSlug": "gyeonggi",
    "city": "가평군",
    "address": "경기도 가평군 상면 둔덕말길 232",
    "holes": 27,
    "type": "회원제",
    "description": "가평베네스트 골프클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 브랜드와 예약 코스를 함께, 명성보다 필요한 조건을 묻기, 가평 관광을 추가할지 정하기 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "27홀",
      "회원제"
    ],
    "openedYear": 2004,
    "website": "https://rnc.samsungcnt.com/business/golf/gapyeong/index.html"
  },
  {
    "slug": "lakewood-cc",
    "name": "레이크우드 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "양주시",
    "address": "경기 양주시",
    "holes": 36,
    "type": "코스별 상이",
    "description": "레이크우드 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 레이크우드의 코스 선택 확인, 서울 북부 출발도 경로는 다릅니다, 세대가 다른 동반자와 준비 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "36홀",
      "코스별 상이"
    ]
  },
  {
    "slug": "namchon-cc",
    "name": "남촌 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "광주시",
    "address": "경기 광주시 곤지암읍",
    "holes": 18,
    "type": "회원제",
    "description": "남촌 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 회원권 가격과 방문 경험을 분리, 중요한 모임일수록 변경 절차부터, 비공개 대화가 필요한 경우 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "yangji-pine-gc",
    "name": "양지파인리조트 골프클럽",
    "regionSlug": "gyeonggi",
    "city": "용인시",
    "address": "경기 용인시 처인구 양지면",
    "holes": 27,
    "type": "대중제",
    "openedYear": 1970,
    "description": "1970년 개장한 산악형 27홀 대중제 코스로, 독조산 기슭의 고저차를 그대로 살려 호쾌한 라운드를 즐길 수 있습니다. 콘도와 스키장을 갖춘 종합 리조트 안에 있어 가족 단위 방문객이 많고, 영동고속도로 양지 나들목에서 가까워 접근이 수월합니다.",
    "features": [
      "27홀",
      "대중제",
      "산악형 코스",
      "리조트 연계"
    ],
    "nearby": [
      "에버랜드",
      "한국민속촌",
      "와우정사"
    ]
  },
  {
    "slug": "eighty-eight-cc",
    "name": "88 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "용인시",
    "address": "경기 용인시 기흥구",
    "holes": 36,
    "type": "회원제",
    "description": "88 컨트리클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 88CC 예약 안내의 코스명, 몸 풀 시간을 출발표에 넣기, 라운드 전 식사 여부 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "36홀",
      "회원제"
    ]
  },
  {
    "slug": "ferrum-club",
    "name": "페럼클럽",
    "regionSlug": "gyeonggi",
    "city": "여주시",
    "address": "경기 여주시",
    "holes": 18,
    "type": "대중제",
    "description": "페럼클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 공식 예약과 평가 문구 구분, 건축과 코스에 관심이 있다면, 견적 비교에 남길 항목 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "대중제"
    ]
  },
  {
    "slug": "anseong-benest-gc",
    "name": "안성베네스트 골프클럽",
    "regionSlug": "gyeonggi",
    "city": "안성시",
    "address": "경기 안성시 금광면",
    "holes": 36,
    "type": "코스별 상이",
    "description": "안성베네스트 골프클럽 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 같은 브랜드의 다른 지점과 구분, 최근 상태가 중요한 경우, 안성 방문과 귀가 동선 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "36홀",
      "코스별 상이"
    ]
  },
  {
    "slug": "sky-valley-cc",
    "name": "스카이밸리 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "여주시",
    "address": "경기 여주시 북내면",
    "holes": 36,
    "type": "대중제",
    "openedYear": 1998,
    "description": "회원제와 대중제 18홀씩 36홀을 나눠 운영하는 대형 코스로, 69만 평 부지에 네 개 코스를 펼쳐 놓았습니다. 산과 호수를 끼고 설계해 홀마다 경관이 달라지며, 대중제 코스 덕분에 비회원도 부담 없이 찾을 수 있습니다. 여주 나들목에서 가까워 수도권 동부 접근성이 좋습니다.",
    "features": [
      "36홀",
      "대중제 운영",
      "산·호수 경관",
      "수도권 동부"
    ],
    "nearby": [
      "여주 신륵사",
      "명성황후 생가",
      "여주 프리미엄 아울렛"
    ]
  },
  {
    "slug": "360-degree-cc",
    "name": "360도 컨트리클럽",
    "regionSlug": "gyeonggi",
    "city": "여주시",
    "address": "경기 여주시 강천면",
    "holes": 18,
    "type": "대중제",
    "openedYear": 2011,
    "description": "사방으로 펼쳐지는 산세를 그대로 끌어안아 '360도'라는 이름을 붙인 18홀 대중제 코스입니다. 고저차와 굴곡이 분명해 같은 거리라도 클럽 선택이 까다롭고, 그만큼 공략하는 재미가 큽니다. 자연 지형을 거스르지 않은 설계가 라운드 내내 경관을 선사합니다.",
    "features": [
      "18홀",
      "대중제",
      "산악형 코스",
      "경관 설계"
    ],
    "nearby": [
      "여주 신륵사",
      "강천섬",
      "여주 프리미엄 아울렛"
    ]
  },
  {
    "slug": "jack-nicklaus-korea",
    "name": "잭니클라우스 골프클럽 코리아",
    "regionSlug": "incheon",
    "city": "연수구",
    "address": "인천 연수구 송도동",
    "holes": 18,
    "type": "회원제",
    "description": "잭니클라우스 골프클럽 코리아 방문을 준비할 때 예약과 동반 일정을 함께 살펴보세요. 아래에서는 대회 이력과 당일 이용은 별도, 송도 업무 일정과 함께 잡을 때, 해안권 예보를 준비에 반영 순서로 확인할 내용을 정리했습니다.",
    "features": [
      "18홀",
      "회원제"
    ]
  },
  {
    "slug": "sonofelice-cc",
    "name": "소노펠리체 컨트리클럽",
    "regionSlug": "gangwon",
    "city": "홍천군",
    "address": "강원 홍천군 서면",
    "holes": 36,
    "type": "대중제",
    "openedYear": 2009,
    "description": "비발디파크·소노벨 리조트와 연결된 36홀 코스로, 이스트와 웨스트 두 코스가 각기 다른 공략 묘미를 줍니다. 스키장과 오션월드를 함께 갖춘 단지 안에 있어 사계절 휴양형 라운드에 어울립니다. 서울에서 한 시간대로 닿는 접근성도 강점입니다.",
    "features": [
      "36홀",
      "리조트형",
      "이스트·웨스트 코스",
      "사계절 휴양"
    ],
    "nearby": [
      "비발디파크",
      "오션월드",
      "팔봉산"
    ]
  },
  {
    "slug": "gaya-cc",
    "name": "가야 컨트리클럽",
    "regionSlug": "gyeongnam",
    "city": "김해시",
    "address": "경남 김해시 삼방동",
    "holes": 54,
    "type": "회원제",
    "openedYear": 1988,
    "description": "여섯 개 코스 54홀을 갖춘 영남권 매머드급 골프장으로, 김해 시내에서 가까워 접근성과 규모를 모두 잡았습니다. KLPGA 대회가 열리는 코스를 포함해 난이도와 관리 수준이 고르게 높습니다. 코스 선택의 폭이 넓어 실력과 취향에 맞춰 라운드를 짤 수 있습니다.",
    "features": [
      "54홀",
      "회원제",
      "KLPGA 개최",
      "6개 코스"
    ],
    "nearby": [
      "가야테마파크",
      "수로왕릉",
      "봉리단길"
    ]
  },
  {
    "slug": "tongdo-pine-east-cc",
    "name": "통도파인이스트 컨트리클럽",
    "regionSlug": "gyeongnam",
    "city": "양산시",
    "address": "경남 양산시 하북면",
    "holes": 36,
    "type": "회원제",
    "openedYear": 1984,
    "description": "30년 넘게 영남 골퍼들과 함께해 온 36홀 회원제 코스입니다. 호쾌한 남코스와 정교함을 요구하는 북코스가 뚜렷이 대비돼 같은 골프장에서 다른 결의 라운드를 경험할 수 있습니다. 통도사와 가까워 라운드와 사찰 여행을 함께 묶기 좋습니다.",
    "features": [
      "36홀",
      "회원제",
      "남·북 코스 대비",
      "야간 라운드"
    ],
    "nearby": [
      "통도사",
      "통도환타지아",
      "에덴밸리"
    ]
  },
  {
    "slug": "cheonryong-cc",
    "name": "천룡 컨트리클럽",
    "regionSlug": "chungbuk",
    "city": "진천군",
    "address": "충북 진천군 이월면",
    "holes": 27,
    "type": "회원제",
    "openedYear": 1995,
    "description": "진천 산지에 자리한 27홀 회원제 코스로, 청룡·흑룡·황룡 세 개 코스에 퍼블릭 9홀을 더해 구성을 갖췄습니다. 소수 정예 회원 운영으로 한적한 라운드가 가능하며, 산세를 살린 코스가 계절마다 다른 표정을 보여줍니다. 중부고속도로와 가까워 충청·수도권 양쪽에서 닿기 좋습니다.",
    "features": [
      "27홀",
      "회원제",
      "소수 정예",
      "산지형 코스"
    ],
    "nearby": [
      "진천 농다리",
      "보탑사",
      "초평호"
    ]
  }
];

// 정보 보강 전에는 보강하지 않은 공공데이터 코스를 비공개로 둡니다.
// 내용 검증 후 INCLUDE_IMPORTED 를 true 로 바꾸면 전체 목록이 다시 노출됩니다.
const INCLUDE_IMPORTED = false;

// 시드 코스와 이름이 겹치는 임포트 코스는 재공개 시 자동으로 제외합니다.
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/(컨트리클럽|골프클럽|골프앤리조트|골프&리조트|골프리조트|골프장|c\.c|cc|g\.c|gc)$/g, "");
}
const seedNameKeys = new Set(seedCourses.map((c) => normalizeName(c.name)));
const dedupedImported = importedCourses.filter((c) => !seedNameKeys.has(normalizeName(c.name)));

// 직접 작성한 시드 코스를 먼저 노출하고, (내용 검증 후) 공공데이터 기반 목록을 뒤에 이어 붙입니다.
export const courses: GolfCourse[] = INCLUDE_IMPORTED
  ? [...seedCourses, ...dedupedImported]
  : [...seedCourses];

export const courseMap = new Map(courses.map((c) => [c.slug, c]));

export function getCourse(slug: string): GolfCourse | undefined {
  return courseMap.get(slug);
}

/** 심층 리뷰(deepDive)가 작성된 주력 코스인지 여부. */
export function hasDeepDive(slug: string): boolean {
  return Boolean(getCourseNote(slug)?.deepDive?.length);
}

// 콘텐츠 품질 유지를 위해 심층 리뷰(deepDive)가 있는 주력 코스만 "목록"에 노출합니다.
// 빈 정보가 포함된 페이지의 노출을 줄이기 위한 편집 기준입니다.
// 데이터(courses) 자체는 그대로 두므로 상세 페이지·직접 URL은 계속 동작합니다.
// 내용 검증 후 CURATED_LIST_ONLY 를 false 로 바꾸면 전체 코스가 다시 목록에 노출됩니다.
const CURATED_LIST_ONLY = true;

/** 지역·홈·관련 코스 등 "목록"에 노출할 코스 집합. */
export const listedCourses: GolfCourse[] = CURATED_LIST_ONLY
  ? courses.filter((c) => !c.imported && hasDeepDive(c.slug))
  : courses;

export function getCoursesByRegion(regionSlug: string): GolfCourse[] {
  return listedCourses.filter((c) => c.regionSlug === regionSlug);
}

export function getFeaturedCourses(): GolfCourse[] {
  return listedCourses.filter((c) => c.featured);
}

export function countByRegion(regionSlug: string): number {
  return listedCourses.reduce((n, c) => (c.regionSlug === regionSlug ? n + 1 : n), 0);
}
