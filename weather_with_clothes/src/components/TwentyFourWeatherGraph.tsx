import React, { useEffect, useState } from 'react';
import { todayInfoDefaultParam, useTodayWeatherInfo } from '../API/weather';
import { getTwentyHours, threeDaysWeatherInfo } from '../Utils/common';
import Hour from './Hour/Hour';
import ChartExample from './Chart/Chart';

export default function TwentyFourWeatherGraph(props) {

  const { twentyFourHourData } = props;

  if (!twentyFourHourData) {
    return <div>Loading...</div>; // 데이터가 없는 경우 로딩 상태를 표시
  }


  return (
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-56 border-2'>
      <p className='mb-2'>밤에도 맑은 날씨가 이어져요</p>
      <div className='border-t-2 mb-2'></div>
      <div className='flex overflow-x-scroll no-scrollbar whitespace-nowrap'>
      {twentyFourHourData && (
        <div className='block mr-auto'>
          <div className='flex'>
            <Hour twentyFourHourData={twentyFourHourData} type='today'/>
            <Hour twentyFourHourData={twentyFourHourData} type='tomorrow'/>
          </div>
          <div className='p-0'>
            <ChartExample twentyFourHourData={twentyFourHourData}/>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}