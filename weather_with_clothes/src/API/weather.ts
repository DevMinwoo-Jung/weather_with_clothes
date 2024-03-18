import { useQuery } from '@tanstack/react-query';
import { shortLiveWeather, shortLiveWeatherParam } from '../Utils/watherType';
import { MID_TERM_TEMP_END_POINT } from './weatherEndPoint';



export const fetchShortLiveWeather = async (shortLiveWeatherParam:shortLiveWeatherParam) => {

const { numOfRows, pageNo, regId, tmFc} = shortLiveWeatherParam;

  const res = await fetch(
    `${MID_TERM_TEMP_END_POINT}serviceKey=${import.meta.env.VITE_REACT_APP_MID_FORECAST_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&regId=${regId}&tmFc=${tmFc}&dataType=JSON
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