export function geoFindMe() {
  let status:string = "";
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude, longitude);
  }

  function error() {
    status = "현재 위치를 가져올 수 없음";
    return console.log(status)
  }

  if (!navigator.geolocation) {
    status = "브라우저가 위치 정보를 지원하지 않음";
    return console.log(status)
  } else {
    status = "위치 파악 중…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
