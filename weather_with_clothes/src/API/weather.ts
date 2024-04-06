import { useQuery } from '@tanstack/react-query';
import { dailyWeatherInfoParam, shortLiveWeatherParam, todayWeatherInfoParam } from '../Utils/watherType';
import { DAILY_FORCAST_END_POINT, MID_TERM_TEMP_END_POINT, TODAY_FORCAST_END_POINT } from './weatherEndPoint';
import { getCurrentDate, getOneWeek, getOneWeekAgo, getTodayFullDate } from '../Utils/common';

const SERVICE_KEY = import.meta.env.VITE_REACT_APP_MID_FORECAST_KEY;

export const fetchShortLiveWeather = async (shortLiveWeatherParam:shortLiveWeatherParam) => {

const { numOfRows, pageNo, regId, tmFc} = shortLiveWeatherParam;

  const res = await fetch(
    `${MID_TERM_TEMP_END_POINT}serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&regId=${regId}&tmFc=${tmFc}&dataType=JSON
    `);
    
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await res.json();

  return data;
};

export const defaultParam:shortLiveWeatherParam = {
  numOfRows: "10",
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
  numOfRows: "10",
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
  
  
  
  export const fetchTodayWeatherInfo = async (todayInfoDefaultParam:todayWeatherInfoParam) => {
  
    const { numOfRows, pageNo, base_date, base_time, nx, ny} = todayInfoDefaultParam;
    
      const res = await fetch(
        `${TODAY_FORCAST_END_POINT}serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}
        &dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}
        `);
        
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await res.json();
      
      return data;
    };
  
    export function useTodayWeatherInfo(todayInfoDefaultParam:todayWeatherInfoParam){
      return useQuery ({
        queryKey: ['todayInfo', todayInfoDefaultParam],
        queryFn: () => fetchTodayWeatherInfo(todayInfoDefaultParam)
      });
    }