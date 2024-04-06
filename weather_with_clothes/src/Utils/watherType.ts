export type shortLiveWeather = {
  pageNo: string,
  numOfRows: string,
  totalCount: string,
  resultCode: string,
  resultMsg: string,
  wfSv: string,
};

export type shortLiveWeatherParam = {
  numOfRows: string;
  pageNo: string;
  regId: string;
  tmFc: string;
  dataType?: string;
}

export type dailyWeatherInfoParam = {
  pageNo: string;
  numOfRows: string;
  dataCd: string;
  dateCd: string;
  startDt: string;
  endDt: string;
  stnIds: string;
}

export type todayWeatherInfoParam = {
  pageNo: string;
  numOfRows: string | number;
  base_date: string;
  base_time: string;
  nx: string;
  ny: string;
}