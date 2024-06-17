import { FULL_THREEDAYSLATER, FULL_TODAY, FULL_TOMORROW } from "../API/weather";
import { twentyFourHourData } from "./dataType";

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
const date  = (dateObj.getDate()).toString().padStart(2, '0');
const TODAY_FULL_DATE = getTodayFullDate();
const TOMORROW_FULL_DATE = getTodayFullDate();

export function getCurrentDate() {

  const _year = year;
  const _month = month
  const _date  = date
  const hours = Number(dateObj.getHours()) <= 18 ? '0600' : '1800';
  return `${_year}${_month}${_date}${hours}`;
}

export function getTodayFullDate() {

  const _year = year;
  const _month = month
  const _date  = date

  return `${_year}${_month}${_date}`;
}

export function getTmorrowFullDate() {

  const dateObj = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 하루의 밀리초 24시간 60분 60초 1000밀리초, 이걸 getTime에 더하면 정확히 하루 뒤 return
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date  = (dateObj.getDate()).toString().padStart(2, '0');

  return `${year}${month}${date}`;
}

/// 이 두개는 합쳐야 한다 리팩토링 필요

export function getThreeDaysLaterFullDate() {

  const dateObj = new Date(new Date().getTime() + 48 * 60 * 60 * 1000); // 하루의 밀리초 24시간 60분 60초 1000밀리초, 이걸 getTime에 더하면 정확히 하루 뒤 return
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date  = (dateObj.getDate()).toString().padStart(2, '0');

  return `${year}${month}${date}`;
}

export function getOneWeekAgo() {

  let currentDate = dateObj
  let sevenWeeksAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));

  let year = sevenWeeksAgo.getFullYear();
  let month = (sevenWeeksAgo.getMonth() + 1).toString().padStart(2, '0'); 
  let date = (sevenWeeksAgo.getDate()).toString().padStart(2, '0');;

  return `${year}${month}${date}`;
}

export function getOneWeek() {

  const _year = year;
  const _month = month
  const oneDayAgo = new Date(dateObj.getTime() - (1 * 24 * 60 * 60 * 1000)).getDate();

  return `${_year}${_month}${oneDayAgo}`;
}

// converting한 24시간 데이터 가져오기
export function getTwentyHours(data:twentyFourHourData[]) {
  
  let todayData:twentyFourHourData[] = [];
  let tomorrowData:twentyFourHourData[] = [];
  let resultData:any = {};
  
  data.map((ele:twentyFourHourData)=> {
    if(ele.fcstDate === TODAY_FULL_DATE && compareGPSTimes(ele.fcstTime.slice(0, 2), getNowHours()) === 1) {
      todayData.push(ele);
    } else if(ele.fcstDate !== TODAY_FULL_DATE && compareGPSTimes(ele.fcstTime.slice(0, 2), getNowHours()) === -1) {
      tomorrowData.push(ele);
    }
  })

  todayData["isToday"] = true;
  tomorrowData["isToday"] = false;
  
  const todayConvertData:any = convertDataToTimeObject(todayData);
  const tomorrowConvertData:any =  convertDataToTimeObject(tomorrowData);
  const arrayLength:number = Object.keys(todayConvertData).length + Object.keys(tomorrowConvertData).length;

  resultData = {todayConvertData, tomorrowConvertData, arrayLength}
  
  return resultData;

}

export function threeDaysWeatherInfo(data){

  let todayInfo = {};
  let tomorrowInfo = {};
  let threeDaysLaterInfo = {};
  let popLengths = {};
  let skyLengths = {
    "today": {

    },
    "tomorrow": {

    },
    "threeDaysLater": {

    },
  };

  let ptyLengths = {
    "today": {

    },
    "tomorrow": {

    },
    "threeDaysLater": {

    },
  };

  const addValueToTimeBasedInfo = (info, ele, key) => {
      const timeOfDay = Number(ele.fcstTime.slice(0, 2)) < 12 ? "AM" : "PM";
      info[key] = info[key] || {};
      info[key][timeOfDay] = Array.isArray(info[key][timeOfDay]) ? [...info[key][timeOfDay], ele.fcstValue] : [ele.fcstValue];
  };

  const handleCategory = (info, ele) => {
      switch (ele.category) {
          case "TMP":
              info["MIN"] = info["MIN"] ? Math.min(info["MIN"], ele.fcstValue) : ele.fcstValue;
              break;
          case "PTY":
              addValueToTimeBasedInfo(info, ele, "PTY");
              break;
          case "SKY":
              addValueToTimeBasedInfo(info, ele, "SKY");
              break;
          case "TMX":
              info["MAX"] = ele.fcstValue;
              break;
          case "POP":
              info["POP"] = info["POP"] ? [...info["POP"], ele.fcstValue] : [ele.fcstValue];
              break;
      }
  };

  data.forEach(ele => {
      switch (ele.fcstDate) {
          case FULL_TODAY:
              handleCategory(todayInfo, ele);
              break;
          case FULL_TOMORROW:
              handleCategory(tomorrowInfo, ele);
              break;
          case FULL_THREEDAYSLATER:
              handleCategory(threeDaysLaterInfo, ele);
              break;
      }
  });

                        

  popLengths["today"] = todayInfo["POP"].length;
  popLengths["tomorrow"] = tomorrowInfo["POP"].length;
  popLengths["threeDaysLater"] = threeDaysLaterInfo["POP"].length;
  /////
  skyLengths["today"]["AM"] = todayInfo["SKY"]["AM"].length;
  skyLengths["today"]["PM"] = todayInfo["SKY"]["PM"].length;
  skyLengths["tomorrow"]["AM"] = tomorrowInfo["SKY"]["AM"].length;
  skyLengths["tomorrow"]["PM"] = tomorrowInfo["SKY"]["PM"].length;
  skyLengths["threeDaysLater"]["AM"] = threeDaysLaterInfo["SKY"]["AM"].length;
  skyLengths["threeDaysLater"]["PM"] = threeDaysLaterInfo["SKY"]["PM"].length;
  /////
  ptyLengths["today"]["AM"] = todayInfo["PTY"]["AM"].length;
  ptyLengths["today"]["PM"] = todayInfo["PTY"]["PM"].length;
  ptyLengths["tomorrow"]["AM"] = tomorrowInfo["PTY"]["AM"].length;
  ptyLengths["tomorrow"]["PM"] = tomorrowInfo["PTY"]["PM"].length;
  ptyLengths["threeDaysLater"]["AM"] = threeDaysLaterInfo["PTY"]["AM"].length;
  ptyLengths["threeDaysLater"]["PM"] = threeDaysLaterInfo["PTY"]["PM"].length;
  ////////
  todayInfo["POP"] = getDataSumResult(todayInfo, popLengths["today"], "POP");
  tomorrowInfo["POP"] = getDataSumResult(tomorrowInfo, popLengths["tomorrow"], "POP");
  threeDaysLaterInfo["POP"] = getDataSumResult(threeDaysLaterInfo, popLengths["threeDaysLater"], "POP");
  /////
  todayInfo["SKY"]["AM"] = getDataSumResult(todayInfo, skyLengths["today"]["AM"], "SKY", "AM");
  tomorrowInfo["SKY"]["AM"] = getDataSumResult(tomorrowInfo, skyLengths["tomorrow"]["AM"], "SKY", "AM");
  threeDaysLaterInfo["SKY"]["AM"] = getDataSumResult(threeDaysLaterInfo, skyLengths["threeDaysLater"]["AM"], "SKY", "AM");
  todayInfo["SKY"]["PM"] = getDataSumResult(todayInfo, skyLengths["today"]["PM"], "SKY", "PM");
  tomorrowInfo["SKY"]["PM"] = getDataSumResult(tomorrowInfo, skyLengths["tomorrow"]["PM"], "SKY", "PM");
  threeDaysLaterInfo["SKY"]["PM"] = getDataSumResult(threeDaysLaterInfo, skyLengths["threeDaysLater"]["PM"], "SKY", "PM");
  ///
                          /////
  todayInfo["PTY"]["AM"] = getDataSumResult(todayInfo, skyLengths["today"]["AM"], "PTY", "AM");
  tomorrowInfo["PTY"]["AM"] = getDataSumResult(tomorrowInfo, skyLengths["tomorrow"]["AM"], "PTY", "AM");
  threeDaysLaterInfo["PTY"]["AM"] = getDataSumResult(threeDaysLaterInfo, skyLengths["threeDaysLater"]["AM"], "PTY", "AM");
  todayInfo["PTY"]["PM"] = getDataSumResult(todayInfo, skyLengths["today"]["PM"], "PTY", "PM");
  tomorrowInfo["PTY"]["PM"] = getDataSumResult(tomorrowInfo, skyLengths["tomorrow"]["PM"], "PTY", "PM");
  threeDaysLaterInfo["PTY"]["PM"] = getDataSumResult(threeDaysLaterInfo, skyLengths["threeDaysLater"]["PM"], "PTY", "PM");

  return { todayInfo, tomorrowInfo, threeDaysLaterInfo }; 

}
function getDataSumResult(data, Datalength, type, subType = "") {
  const target = subType ? data[type][subType] : data[type];
  return ((target.reduce((a, b) => Number(a) + Number(b), 0)) / Datalength).toFixed(0);
}

export function getNowHours() {

  const NowHours = new Date().getHours();

  if(NowHours < 10) {
    return `0${NowHours}`
  } else {
    return NowHours;
  }

}


function compareGPSTimes(time1, time2) {
  // Adjust for GPS time wraparound (86400 seconds in a day)
  time1 = (Number(time1) + 86400) % 86400;
  time2 = (Number(time2) + 86400) % 86400;


  if (time1 <= time2) {
      return -1;
  } else if (time1 > time2) {
      return 1;
  } else {
      return 0;
  }
}

function convertDataToTimeObject(data) {
  const convertedData = {};
  data.forEach(ele => {
    if (!convertedData[ele.fcstTime]) {
      convertedData[ele.fcstTime] = {};
      convertedData[ele.fcstTime]["TIME"] = convertTimeToTwentyFourHour(ele.fcstTime);
      convertedData[ele.fcstTime]["TIME_24"] = Number(ele.fcstTime);
    }
    
    if (!convertedData[ele.fcstTime][ele.category]) {
      convertedData[ele.fcstTime][ele.category] = '';
    }

    // if(data.isToday){
    //   convertedData["isToday"] = true;
    // } else {
    //   convertedData["isToday"] = false;
    // }
    
    convertedData[ele.fcstTime][ele.category] = ele.fcstValue;
  });

  return convertedData;
} 

function convertTimeToTwentyFourHour(time:string){

  const hour = Number(time.slice (0, 2));

  if(hour <= 12) {
    if(hour === 0) {
      return `오전 ${12}`;
    } else {
      return `오전 ${hour}`;
    }
    
  } else  {
    return `오후 ${hour % 12}`;
  }

}


// 데이터 필터링 함수 정의
export function filterData(data:any) {
  const response = data;
  let filteredData = {};
  for (const key in response) {
      // "High" 또는 "Low"를 포함하지 않는 키만 새로운 객체에 할당
      if (!key.includes("High") && !key.includes("Low")) {
          filteredData[key] = data[key];
      }
  }

  const lowTempData = {};
  const maxTempData = {};
  const regId = {};

  for (const key in filteredData) {

    if(key.includes("Max")) {
      maxTempData[key] = filteredData[key];
    } else if (key.includes("Min")) {
      lowTempData[key] = filteredData[key];
    } else {
      regId[key] = filteredData[key];
    }
  }

  return { lowTempData, maxTempData, regId };
}


const daysFull:string[] = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

export function getDaysInfo(){
  const WEEKLENGTH = 7;
  const WEEK_ARRY:string[] = ["오늘"];
  
  for(let i = 0; i < WEEKLENGTH - 1; i++){
    WEEK_ARRY.push(daysFull[new Date((new Date().getTime() + ((i) * 24) * 60 * 60 * 1000)).getDay()])
  }

  return WEEK_ARRY;
}


// ladn 데이터 필터링 함수 정의
export function filterLandData(data:any) {
  const response = data;
  let filteredData = {};
  for (const key in response) {
      // "High" 또는 "Low"를 포함하지 않는 키만 새로운 객체에 할당
      if (!key.includes("8") && !key.includes("9") && !key.includes("10")) {
          filteredData[key] = data[key];
      }
  }

  return filteredData;
//   const lowTempData = {};
//   const maxTempData = {};
//   const regId = {};

//   for (const key in filteredData) {

//     if(key.includes("Max")) {
//       maxTempData[key] = filteredData[key];
//     } else if (key.includes("Min")) {
//       lowTempData[key] = filteredData[key];
//     } else {
//       regId[key] = filteredData[key];
//     }
//   }

//   return { lowTempData, maxTempData, regId };
}