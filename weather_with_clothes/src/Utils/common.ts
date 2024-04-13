import { twentyFourHourData } from "./weatherType";

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
  const hours = dateObj.getHours() > 12 ? '0600' : '1800';

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

  console.log(`${year}${month}${date}`);
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
  
  
  const tomorrowConvertData:any = convertDataToTimeObject(todayData);
  const todayConvertData:any =  convertDataToTimeObject(tomorrowData);
  
  resultData = '';
  
  console.log(tomorrowConvertData)
  console.log(todayConvertData)
  console.log(resultData)

  return resultData;

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


  if (time1 < time2) {
      return -1;
  } else if (time1 >= time2) {
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
    }
    
    if (!convertedData[ele.fcstTime][ele.category]) {
      convertedData[ele.fcstTime][ele.category] = '';
    }
    
    convertedData[ele.fcstTime][ele.category] = ele.fcstValue;
  });

  return convertedData;
}

