import { useQuery } from '@tanstack/react-query';
import { dailyWeatherInfoParam, shortLiveWeatherParam } from '../Utils/watherType';
import { DAILY_FORCAST_END_POINT, MID_TERM_TEMP_END_POINT } from './weatherEndPoint';

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
  tmFc: "202403180600",
  dataType: "JSON"
}


export function useShortLiveWeather(defaultParam:shortLiveWeatherParam){
  return useQuery ({
    queryKey: ['post', defaultParam],
    queryFn: () => fetchShortLiveWeather(defaultParam)
  });
}

export const dailyInfoDefaultParam:dailyWeatherInfoParam = {
  numOfRows: "10",
  pageNo: "1",
  dataCd: "ASOS",
  dateCd: "DAY",
  startDt: "20240315",
  endDt: "20240317",
  stnIds: "108"
}



export const fetchDailyWeatherInfo = async (shortLiveWeatherParam:dailyWeatherInfoParam) => {

  const { numOfRows, pageNo, dataCd, dateCd, startDt, endDt, stnIds} = shortLiveWeatherParam;
  
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