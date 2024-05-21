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

export type twentyFourHourData ={
  baseDate: string;
  baseTieme: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

export type twentyFourHourResult = {
  todayConvertData: hourResult;
  tomorrowConvertData: hourResult;
  arrayLength: number;
}

export type hourResult = {
  TIME?: string;
  TIME_24: string;
  TMP?: string;
  UUU?: string;
  VVV?: string;
  VEC?: string;
  WSD?: string;
  SKY?: string;
  PTY?: string;
  POP?: string;
  WAV?: string;
  PCP?: string;
  REH?: string;
  SNO?: string;
}


export interface Ibeobjungdong {
  lgdng_cd: number
  ctpv_nm: string
  ctgg_nm: string
  adstrd_nm: string
  adstrd_en_nm: string
  lgdng_nm: string
  adstrd_cd: number
  admn_inst_cd: number
}
