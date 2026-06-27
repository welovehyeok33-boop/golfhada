/**
 * 코스별 에디터 노트. 운영자가 직접 정리한 큐레이션 메모입니다.
 * - recommendedFor: 이런 분께 추천
 * - playTip: 코스 공략 한 줄
 * slug 기준으로 코스 상세 페이지에 노출됩니다. (보강된 시드 코스에만 작성)
 */
export type CourseNote = {
  recommendedFor: string;
  playTip: string;
};

export const courseNotes: Record<string, CourseNote> = {
  "lakeside-cc": {
    recommendedFor: "주말에도 비교적 수월하게 부킹하고 싶은 초·중급 골퍼",
    playTip: "코스가 평탄한 만큼 거리보다 방향성에 집중하면 스코어가 잘 나옵니다.",
  },
  "bear-creek-pocheon": {
    recommendedFor: "코스 관리 좋은 수림형에서 가을 단풍 라운드를 즐기고 싶은 분",
    playTip: "크리크가 곳곳에 숨어 있어 무리한 핀 공략보다 안전한 레이업이 유리합니다.",
  },
  "namseoul-cc": {
    recommendedFor: "강남 근처에서 격식 있는 비즈니스 라운드가 필요한 분",
    playTip: "우거진 수림이 페어웨이를 좁게 만들어 티샷 방향이 스코어를 가릅니다.",
  },
  "sky72-ocean": {
    recommendedFor: "공항 근처에서 다양한 코스를 골라 치고 싶은 분",
    playTip: "바닷바람이 강한 편이라 평소보다 한 클럽 넉넉히 잡는 게 안전합니다.",
  },
  "bears-best-cheongna": {
    recommendedFor: "잭 니클라우스의 명홀들을 한 번에 경험하고 싶은 분",
    playTip: "홀마다 콘셉트가 달라 사전에 코스 가이드를 보고 공략 루트를 짜두면 좋습니다.",
  },
  "phoenix-cc": {
    recommendedFor: "스키·휴양과 라운드를 함께 묶고 싶은 가족 단위 방문객",
    playTip: "고지대라 체감 비거리가 늘어나니 클럽 선택을 한 단계 낮춰보세요.",
  },
  "oak-valley-cc": {
    recommendedFor: "라운드와 문화·휴양을 함께 즐기려는 분",
    playTip: "자연 지형을 살린 코스라 오르막·내리막 라이에서의 거리 보정이 중요합니다.",
  },
  "woojung-hills-cc": {
    recommendedFor: "토너먼트 코스의 긴장감을 경험하고 싶은 상급 골퍼",
    playTip: "아일랜드 그린은 핀 위치와 바람을 먼저 확인하고 클럽을 정하세요.",
  },
  "golden-bay-cc": {
    recommendedFor: "서해 바다 경관 속에서 탁 트인 라운드를 원하는 분",
    playTip: "해풍이 부는 날은 낮고 강한 탄도로 공략하면 거리 손실을 줄일 수 있습니다.",
  },
  "south-links-yeongam": {
    recommendedFor: "국내에서 링크스 스타일을 맛보고 싶은 분",
    playTip: "벙커와 러프가 까다로워 무리한 우드보다 안정적인 아이언 운영이 유리합니다.",
  },
  "muju-deogyusan-cc": {
    recommendedFor: "덕유산 청정 자연 속 라운드를 원하는 분",
    playTip: "산악 코스라 내리막 홀에서 굴러가는 거리를 감안해 클럽을 줄여보세요.",
  },
  "gyeongju-shilla-cc": {
    recommendedFor: "경주 관광과 라운드를 함께 즐기려는 분",
    playTip: "완만한 편이라 퍼팅 라인 읽기에 시간을 더 쓰면 타수를 아낍니다.",
  },
  "cypress-cc-gimhae": {
    recommendedFor: "부산·김해권에서 한적한 회원제 라운드를 원하는 분",
    playTip: "그린 주변 관리가 좋아 어프로치 스핀을 적극적으로 활용해볼 만합니다.",
  },
  "asiad-cc": {
    recommendedFor: "부산 도심에서 대회가 열린 코스를 경험하고 싶은 분",
    playTip: "기장 해안 바람이 변수라 티타임대 풍향을 미리 살펴두면 좋습니다.",
  },
  "dongnae-benest": {
    recommendedFor: "부산 시내에서 가깝게 즐기는 정통 회원제를 찾는 분",
    playTip: "도심 속 오래된 수림이 좁은 공략선을 만들어 방향성이 중요합니다.",
  },
  "palgong-cc": {
    recommendedFor: "대구권에서 팔공산 자락의 명문을 찾는 분",
    playTip: "산자락 코스라 오르막 홀에서 한 클럽 넉넉히 잡는 것이 안전합니다.",
  },
  "daejeon-cc": {
    recommendedFor: "대전 도심에서 접근성 좋은 회원제를 원하는 분",
    playTip: "전장이 길지 않아 정교한 아이언 플레이로 버디 기회를 노릴 수 있습니다.",
  },
  "gwangju-cc": {
    recommendedFor: "광주권에서 부담 없이 즐기는 대중제를 찾는 분",
    playTip: "평탄한 레이아웃이라 일정한 템포로 미스를 줄이는 게 핵심입니다.",
  },
  "ulsan-cc": {
    recommendedFor: "울산 도심 근교에서 회원제 라운드를 원하는 분",
    playTip: "그린이 까다로운 편이라 핀 아래쪽에 공을 보내 오르막 퍼트를 남기세요.",
  },
  "pinx-gc": {
    recommendedFor: "제주 남부에서 손꼽히는 명문 코스를 경험하고 싶은 분",
    playTip: "한라산 쪽 오르막 라이가 많아 거리 보정과 바람 읽기가 함께 필요합니다.",
  },
  "club-nine-bridges": {
    recommendedFor: "PGA 무대가 열린 최상급 코스를 동경하는 분",
    playTip: "스코틀랜드풍 깊은 벙커는 탈출이 어려워 처음부터 피해 가는 설계가 유리합니다.",
  },
  "the-classic-jeju": {
    recommendedFor: "제주 여행 중 가성비 좋은 대중제를 찾는 분",
    playTip: "제주 특유의 바람이 부는 날은 탄도를 낮춰 안정적으로 굴려보세요.",
  },
  "hangang-driving-range": {
    recommendedFor: "서울 도심에서 가볍게 스윙을 점검하려는 분",
    playTip: "라운드 전 드라이버보다 숏게임 위주로 몸을 풀면 실전 감각이 살아납니다.",
  },
  "anyang-cc": {
    recommendedFor: "국내 최고 수준의 코스 관리를 체감하고 싶은 분",
    playTip: "정교하게 다듬은 그린이라 라인보다 거리(스피드) 조절에 더 집중하세요.",
  },
  "haesley-nine-bridges": {
    recommendedFor: "예술적인 코스 디자인을 즐기는 상급 골퍼",
    playTip: "전략적으로 배치된 해저드가 많아 티잉 구역에서 공략 루트부터 정하세요.",
  },
  "konjiam-gc": {
    recommendedFor: "수도권 동남부에서 품격 있는 회원제를 찾는 분",
    playTip: "산지 코스라 평지 라이가 드물어 경사 어드레스 연습이 도움이 됩니다.",
  },
  "hwasan-cc": {
    recommendedFor: "수도권에서 한적한 회원제 라운드를 원하는 분",
    playTip: "굴곡 있는 그린이 많아 어프로치를 핀 가까이 붙이는 것이 스코어 관리의 핵심입니다.",
  },
  "southcape-owners-club": {
    recommendedFor: "바다 절벽 위 세계적 경관에서 인생 라운드를 원하는 분",
    playTip: "해안 절벽 바람이 거세 안전한 클럽으로 페어웨이를 지키는 편이 낫습니다.",
  },
  "raon-gc-jeju": {
    recommendedFor: "제주에서 코스 선택 폭이 넓은 대중제를 찾는 분",
    playTip: "오름 지형을 따라 굴곡이 있어 내리막 홀에서 거리 계산에 유의하세요.",
  },
  "blackstone-jeju": {
    recommendedFor: "제주 곶자왈 원시림 속 라운드를 원하는 분",
    playTip: "숲이 페어웨이를 좁게 감싸 티샷은 거리보다 정확성을 우선하세요.",
  },
  "the-players-chuncheon": {
    recommendedFor: "수도권 동부·춘천권에서 즐기는 휴양형 라운드를 찾는 분",
    playTip: "북한강 조망 홀이 많아 바람 영향을 받는 곳에서 클럽을 한 단계 올려보세요.",
  },
  "whistling-rock-cc": {
    recommendedFor: "독창적인 코스 미학을 즐기는 분",
    playTip: "기복이 큰 그린이 많아 퍼트 스피드 감각을 일찍 잡는 것이 중요합니다.",
  },
  "jade-palace-gc": {
    recommendedFor: "춘천권에서 잘 관리된 회원제를 원하는 분",
    playTip: "수림이 빽빽해 페어웨이를 벗어나면 리스크가 커지니 방향성에 집중하세요.",
  },
  "vision-hills-cc": {
    recommendedFor: "수도권 남부에서 한적한 회원제를 찾는 분",
    playTip: "낙차 있는 홀이 많아 오르막·내리막 거리 보정을 미리 계산해두세요.",
  },
  "ananti-club-seoul": {
    recommendedFor: "수도권에서 리조트형 프리미엄 라운드를 원하는 분",
    playTip: "산세를 살린 코스라 평탄한 라이가 드물어 경사 대응이 스코어를 가릅니다.",
  },
  "east-valley-cc": {
    recommendedFor: "수도권 동남부 명문 회원제를 찾는 분",
    playTip: "계곡을 낀 홀이 많아 무리한 캐리보다 안전한 공략이 유리합니다.",
  },
  "lexfield-cc": {
    recommendedFor: "여주권에서 잘 다듬어진 회원제를 원하는 분",
    playTip: "그린 굴곡이 섬세해 핀 위치에 맞춘 어프로치 거리 조절이 핵심입니다.",
  },
  "pine-beach-golf-links": {
    recommendedFor: "땅끝 해남에서 바다 링크스를 경험하고 싶은 분",
    playTip: "해풍이 상시 부는 링크스라 낮은 탄도의 펀치샷을 준비하면 좋습니다.",
  },
  "sagewood-yeosu-gyeongdo": {
    recommendedFor: "여수 바다 섬에서 휴양 라운드를 즐기려는 분",
    playTip: "바다로 둘러싸여 바람이 변수라 안전한 클럽으로 페어웨이를 지키세요.",
  },
  "grand-cc-cheongju": {
    recommendedFor: "청주권에서 격식 있는 회원제를 찾는 분",
    playTip: "전장이 넉넉해 드라이버 거리보다 두 번째 샷의 정확성이 중요합니다.",
  },
  "ananti-jungang-jincheon": {
    recommendedFor: "충북에서 조용한 회원제 라운드를 원하는 분",
    playTip: "기복 있는 코스라 라이별 어드레스 적응이 스코어를 좌우합니다.",
  },
  "imperial-lake-chungju": {
    recommendedFor: "충주 호반 경관 속 대중제를 찾는 분",
    playTip: "워터해저드가 시야에 들어오는 홀에서는 욕심을 버리고 페어웨이를 노리세요.",
  },
  "sejong-emerson-cc": {
    recommendedFor: "세종·대전권에서 회원제 라운드를 원하는 분",
    playTip: "코스가 넓게 펼쳐져 전반 몇 홀은 거리감을 맞추는 워밍업으로 활용하세요.",
  },
  "sejong-raycastle": {
    recommendedFor: "세종권에서 접근성 좋은 대중제를 찾는 분",
    playTip: "평탄한 편이라 일정한 템포 유지가 미스 방지의 핵심입니다.",
  },
  "yuseong-cc": {
    recommendedFor: "대전 유성 온천과 함께 라운드를 즐기려는 분",
    playTip: "도심 근교 코스라 좁은 홀에서는 방향성을 우선하면 안정적입니다.",
  },
  "guni-cc": {
    recommendedFor: "대구권에서 부담 없는 대중제를 찾는 분",
    playTip: "그린 스피드가 빠른 편이라 첫 홀부터 거리감을 맞춰두세요.",
  },
  "eodeungsan-cc": {
    recommendedFor: "광주 도심에서 가까운 대중제를 원하는 분",
    playTip: "산자락 코스라 오르막 홀에서 클럽을 넉넉히 잡는 편이 안전합니다.",
  },
  "baystars-cc": {
    recommendedFor: "울산권에서 캐주얼하게 즐기는 대중제를 찾는 분",
    playTip: "전장이 길지 않아 숏게임에서 스코어를 만들 기회가 많습니다.",
  },
  "gunsan-cc": {
    recommendedFor: "코스 선택 폭이 넓은 대형 골프장을 원하는 분",
    playTip: "코스마다 성격이 달라 예약한 코스의 특징을 미리 확인해두면 좋습니다.",
  },
  "iksan-cc": {
    recommendedFor: "전북 익산권에서 가까운 대중제를 찾는 분",
    playTip: "평탄한 레이아웃이라 꾸준한 페이스로 큰 실수를 줄이는 것이 중요합니다.",
  },
  "mauna-ocean-cc": {
    recommendedFor: "경주 동해 바다 조망 라운드를 원하는 분",
    playTip: "바다 쪽 홀은 바람이 강해 탄도를 낮춰 공략하면 거리 손실이 적습니다.",
  },
  "bomun-gc": {
    recommendedFor: "경주 보문관광단지에서 관광과 라운드를 묶고 싶은 분",
    playTip: "완만한 공영 코스라 초·중급자도 편하게 라운드 리듬을 잡기 좋습니다.",
  },
  "gapyeong-benest-gc": {
    recommendedFor: "프리미엄 회원제에서 정교한 코스를 경험하고 싶은 분",
    playTip: "고저차가 큰 홀이 많아 오르막·내리막 거리 보정이 스코어를 가릅니다.",
  },
  "lakewood-cc": {
    recommendedFor: "서울 북부에서 전통 있는 명문 회원제를 찾는 분",
    playTip: "오래된 수림이 페어웨이를 좁히니 티샷 방향에 신경 쓰세요.",
  },
  "namchon-cc": {
    recommendedFor: "최상급 프라이빗 코스를 경험하고 싶은 분",
    playTip: "섬세하게 설계된 그린이라 어프로치 거리를 핀에 정확히 맞추는 것이 중요합니다.",
  },
  "yangji-pine-gc": {
    recommendedFor: "리조트와 묶어 가족 단위로 즐기려는 분",
    playTip: "산악 코스라 내리막에서 굴러가는 거리를 감안해 클럽을 줄여보세요.",
  },
  "eighty-eight-cc": {
    recommendedFor: "라운드 전 충분히 몸을 풀고 싶은 분",
    playTip: "넓은 코스라 첫 9홀에서 거리감을 잡으면 후반이 한결 수월합니다.",
  },
  "ferrum-club": {
    recommendedFor: "챔피언십급 난도에 도전하고 싶은 상급 골퍼",
    playTip: "전장이 길고 해저드가 까다로워 거리보다 코스 매니지먼트가 우선입니다.",
  },
  "anseong-benest-gc": {
    recommendedFor: "도전적인 베네스트 코스를 즐기는 분",
    playTip: "원그린 시스템이라 그린이 크고 굴곡이 커 퍼트 거리 조절이 핵심입니다.",
  },
  "sky-valley-cc": {
    recommendedFor: "여주권에서 경관 좋은 대중제를 찾는 분",
    playTip: "산·호수를 낀 홀이 많아 워터해저드 앞에서는 안전한 레이업이 유리합니다.",
  },
  "360-degree-cc": {
    recommendedFor: "공략하는 재미가 큰 산악 코스를 원하는 분",
    playTip: "고저차가 분명해 같은 거리라도 클럽 선택을 한 번 더 점검하세요.",
  },
  "jack-nicklaus-korea": {
    recommendedFor: "세계 대회가 열린 해안 링크스를 동경하는 분",
    playTip: "바람이 스코어를 좌우하는 링크스라 낮은 탄도 샷을 준비하면 좋습니다.",
  },
  "sonofelice-cc": {
    recommendedFor: "스키·휴양과 라운드를 함께 즐기려는 분",
    playTip: "두 코스 성격이 달라 예약한 코스(이스트·웨스트)의 특징을 미리 확인하세요.",
  },
  "gaya-cc": {
    recommendedFor: "코스 선택 폭이 넓은 영남권 대형 명문을 찾는 분",
    playTip: "코스마다 난도가 달라 실력에 맞는 코스를 골라 예약하는 게 좋습니다.",
  },
  "tongdo-pine-east-cc": {
    recommendedFor: "통도사 여행과 라운드를 함께 묶으려는 분",
    playTip: "남코스는 호쾌, 북코스는 정교해 예약한 코스에 맞춰 전략을 바꾸세요.",
  },
  "cheonryong-cc": {
    recommendedFor: "한적하게 즐기는 산지형 회원제를 원하는 분",
    playTip: "산세를 살린 코스라 경사 라이가 많아 어드레스 적응이 중요합니다.",
  },
};

export function getCourseNote(slug: string): CourseNote | undefined {
  return courseNotes[slug];
}
