import { useQuery } from '@tanstack/react-query';
import { dailyWeatherInfoParam, shortLiveWeatherParam, todayWeatherInfoParam } from '../Utils/dataType';
import { DAILY_FORCAST_END_POINT, MID_TERM_TEMP_END_POINT, TODAY_FORCAST_END_POINT, WEEK_LAND_FORCAST_END_POINT } from './weatherEndPoint';
import { getCurrentDate, getOneWeek, getOneWeekAgo, getThreeDaysLaterFullDate, getTmorrowFullDate, getTodayFullDate } from '../Utils/common';
import { twentyFourHourData } from '../Utils/dataType';

const SERVICE_KEY = import.meta.env.VITE_REACT_APP_MID_FORECAST_KEY;
export const FULL_TODAY =  getTodayFullDate();
export const FULL_TOMORROW = getTmorrowFullDate();
export const FULL_THREEDAYSLATER = getThreeDaysLaterFullDate();

export const fetchShortLiveWeather = async (shortLiveWeatherParam:shortLiveWeatherParam) => {

const { numOfRows, pageNo, regId, tmFc} = shortLiveWeatherParam;

  const res = await fetch(
    `${MID_TERM_TEMP_END_POINT}serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&regId=${regId}&tmFc=${tmFc}&dataType=JSON
    `);
    
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await res.json();

  return data.response.body.items.item[0];
};

export const shortLiveWeatherdefaultParam:shortLiveWeatherParam = {
  numOfRows: "1000",
  pageNo: "1",
  regId: "11B10101",
  tmFc: getCurrentDate(),
  dataType: "JSON"
}



export function useShortLiveWeather(defaultParam:shortLiveWeatherParam){
  return useQuery ({
    queryKey: ['post', defaultParam],
    queryFn: () => fetchShortLiveWeather(defaultParam)
  });
}

// 이건 필요 없을거 같은데...?
export const dailyInfoDefaultParam:dailyWeatherInfoParam = {
  numOfRows: "1000",
  pageNo: "1",
  dataCd: "ASOS",
  dateCd: "DAY",
  startDt: getOneWeekAgo(),
  endDt: getOneWeek(),
  stnIds: "108"
}



export const fetchDailyWeatherInfo = async (dailyInfoDefaultParam:dailyWeatherInfoParam) => {

  const { numOfRows, pageNo, dataCd, dateCd, startDt, endDt, stnIds} = dailyInfoDefaultParam;
  
    const res = await fetch(
      `${DAILY_FORCAST_END_POINT}serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}
      &dataType=JSON&dataCd=${dataCd}&dateCd=${dateCd}&startDt=${startDt}&endDt=${endDt}&stnIds=${stnIds}
      `);
      
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await res.json();
  
    return data;
  };

  export function useDailyWeatherInfo(dailyInfoDefaultParam:dailyWeatherInfoParam){
    return useQuery ({
      queryKey: ['dailyInfo', dailyInfoDefaultParam],
      queryFn: () => fetchDailyWeatherInfo(dailyInfoDefaultParam)
    });
  }


  export const todayInfoDefaultParam:todayWeatherInfoParam = {
    pageNo: "1",
    numOfRows: "1000",
    base_date: getTodayFullDate(),
    base_time: "0500",
    nx: "55",
    ny: "127"
  }
  
  
// POP	강수확률	%
// PTY	강수형태	코드값
// PCP	1시간 강수량	범주 (1 mm)
// REH	습도	%
// SNO	1시간 신적설	범주(1 cm)
// SKY	하늘상태	코드값
// TMP	1시간 기온	℃
// TMN	일 최저기온	℃
// TMX	일 최고기온	℃
// UUU	풍속(동서성분)	m/s
// VVV	풍속(남북성분)	m/s
// WAV	파고	M
// VEC	풍향	deg
// WSD	풍속	m/s
// baseTime	발표시각
// fcstDate	예보일자
// fcstTime	예보시각
// category	자료구분문자
// fcstValue	예보 값
// nx	예보지점 X 좌표
// ny	예보지점 Y 좌표
  
  export const fetchTodayWeatherInfo = async (todayInfoDefaultParam:todayWeatherInfoParam) => {
  
    const { numOfRows, pageNo, base_date, base_time, nx, ny} = todayInfoDefaultParam;
    
      const res = await fetch(
        `${TODAY_FORCAST_END_POINT}serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}
        `);
        
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await res.json();

      const fullData = data.response.body.items.item;
      
      const todayForcast = data.response.body.items.item.filter((ele:twentyFourHourData) => ele.fcstDate === FULL_TODAY);
      const tomorrowForcast = data.response.body.items.item.filter((ele) => ele.fcstDate === FULL_TOMORROW);

      const resultData = todayForcast.concat(tomorrowForcast);

      return {fullData, resultData};
    };
  
    export function useTodayWeatherInfo(todayInfoDefaultParam:todayWeatherInfoParam){
      return useQuery ({
        queryKey: ['todayInfo', todayInfoDefaultParam],
        queryFn: () => fetchTodayWeatherInfo(todayInfoDefaultParam)
      });
    }


    export const fetchWeekWeatherInfo = async (shortLiveWeatherParam:shortLiveWeatherParam) => {

      const { numOfRows, pageNo, regId, tmFc} = shortLiveWeatherParam;
      
        const res = await fetch(
          `${WEEK_LAND_FORCAST_END_POINT}serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&regId=${regId}&tmFc=${tmFc}&dataType=JSON
          `);
          
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await res.json();
      
        return data.response.body.items.item[0];
      };
      
      export const fetchWeekWeatherInfoParam:shortLiveWeatherParam = {
        numOfRows: "1000",
        pageNo: "1",
        regId: "11B00000",
        tmFc: getCurrentDate(),
        dataType: "JSON"
      }
      
      
      
      export function useWeekWeatherInfo(defaultParam:shortLiveWeatherParam){
        return useQuery ({
          queryKey: ['post', defaultParam],
          queryFn: () => fetchWeekWeatherInfo(defaultParam)
        });
      }
      