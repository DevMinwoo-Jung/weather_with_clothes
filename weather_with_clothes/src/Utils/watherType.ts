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
  regId: string;
  tmFc: string;
  dataType?: string;
}