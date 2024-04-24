import React, { useEffect, useState } from 'react';
import { todayInfoDefaultParam, useTodayWeatherInfo } from '../API/weather';
import { getTwentyHours, threeDaysWeatherInfo } from '../Utils/common';
import Hour from './Hour/Hour';

export default function TwentyFourWeatherGraph() {
  const { isPending, status, data, error, isFetching } = useTodayWeatherInfo(todayInfoDefaultParam);
  const [twentyFourHourData, setTwentyFourHourData] = useState<any>(null); // null로 초기화
  const [threeDaysWeatherData, setThreeDaysWeatherData] = useState<any>(null); // null로 초기화
  useEffect(() => {
    if (status === 'success') {
      console.log(data)
      const example = getTwentyHours(data.resultData);
      threeDaysWeatherInfo(data.fullData);
      setTwentyFourHourData(example);
    }
  }, [data, status]); // useEffect will trigger when data or status changes

  if(isPending) return <div>Loading...</div>

  if(error) return <div>Error</div>


  return (
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-40 border-2'>
      <p className='mb-2'>밤에도 맑은 날씨가 이어져요</p>
      <div className='border-t-2 mb-2'></div>
      <div className='flex overflow-x-scroll no-scrollbar whitespace-nowrap'>
      {twentyFourHourData && (
        <>
          <Hour twentyFourHourData={twentyFourHourData} type='today'/>
          <Hour twentyFourHourData={twentyFourHourData} type='tomorrow'/>
        </>
      )}
      </div>
    </div>
  );
}