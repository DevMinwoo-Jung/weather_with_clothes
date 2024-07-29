// 예보구역코드, 발표시각의 조회 조건으로 예보일로부터 3일에서 10일까지 최저/최고기온정보를  조회하는 기능
// MidFcstInfoService 중기기온조회
// 이게 필요한가...? 3~10일치를 조회하는건데
export const MID_TERM_TEMP_END_POINT = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?";

// 조회조건(지점 번호, 시간)으로 종관기상관측일자료 데이터(지점 번호, 온도, 습도 등)를 조회하는 기능
export const DAILY_FORCAST_END_POINT = "http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?";
// https://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?
// serviceKey=cBcLGg%2FAk0eezgRUzbJ9Zi2tdON1kNjGLWg25%2BV7G4tD5EPP%2BnU0nlMRHaaR3XKwSnfdlh%2BVrKvKndteDNNahg%3D%3D

//단기예보 정보를 조회하기 위해 발표일자, 발표시각, 예보지점 X좌표, 예보지점 Y 좌표의 조회 조건으로 발표일자, 발표시각, 자료구분문자, 예보 값, 예보일자, 예보시각, 예보지점 X 좌표, 예보지점 Y 좌표의 정보를 조회하는 기능	
// 이걸로는 오늘 날씨 기온(TMP), 비 구름(SKY), 강수확률(POP) 나타내면 될듯
export const TODAY_FORCAST_END_POINT = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?";
// https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?

// 예보구역코드, 발표시각의 조회 조건으로 예보일로부터 3일에서 10일까지 육상날씨정보를 조회하는 기능	
// 이걸로는 오늘 날씨 기온(TMP), 비 구름(SKY), 강수확률(POP) 나타내면 될듯
export const WEEK_LAND_FORCAST_END_POINT = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?";

// 중기전망조회
export const WEEK_SUMMARY_END_POINT = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst?";
