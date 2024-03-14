import { useQuery } from '@tanstack/react-query';
import { MID_TERM_END_POINT } from './weatherEndPoint';

export type shortLiveWeather = {
  pageNo: string,
  numOfRows: string,
  totalCount: string,
  resultCode: string,
  resultMsg: string,
  wfSv: string,
};

export type shortLiveWeatherParam ={
  numOfRows: string;
  pageNo: string;
  tmFc: string;
  stnId: string;
  dataType?: string;
}

export const fetchShortLiveWeather = async ({ queryKey }) => {

  const { numOfRows, pageNo, stnId, tmFc} = queryKey;

  const res = await fetch(
    `${MID_TERM_END_POINT}serviceKey=
    numOfRows=${numOfRows}&pageNo=${pageNo}&stnId=${stnId}&tmFc=${tmFc}&dataType=JSON
    `);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await res.json();

  const shortLiveWeather: shortLiveWeather = {
    pageNo: data.pageNo,
    numOfRows: data.numOfRows,
    totalCount: data.totalCount,
    resultCode: data.resultCode,
    resultMsg: data.resultMsg,
    wfSv: data.wfSv,
  };
  return shortLiveWeather;
};

export const useShortLiveWeather = (param:shortLiveWeatherParam) => {
  return useQuery(['shortLiveWeather'], () => fetchShortLiveWeather(param));
};