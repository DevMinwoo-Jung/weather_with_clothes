// 예보구역코드, 발표시각의 조회 조건으로 예보일로부터 3일에서 10일까지 최저/최고기온정보를  조회하는 기능
export const MID_TERM_TEMP_END_POINT = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?";

// 조회조건(지점 번호, 시간)으로 종관기상관측일자료 데이터(지점 번호, 온도, 습도 등)를 조회하는 기능
export const DAILY_FORCAST_END_POINT = "http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?";
// https://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?
// serviceKey=cBcLGg%2FAk0eezgRUzbJ9Zi2tdON1kNjGLWg25%2BV7G4tD5EPP%2BnU0nlMRHaaR3XKwSnfdlh%2BVrKvKndteDNNahg%3D%3D
// &pageNo=1&numOfRows=10&dataType=XML&dataCd=ASOS&dateCd=DAY&startDt=20240315&endDt=20240316&stnIds=108