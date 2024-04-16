import React, { useEffect, useState } from 'react'
import { useTodayWeatherInfo, todayInfoDefaultParam } from '../API/weather';
import { hourResult, twentyFourHourData, twentyFourHourResult } from '../Utils/weatherType';
import { getTwentyHours } from '../Utils/common';

export default function TwentyFourWeatherGraph() {

  const { status, data, error, isFetching } = useTodayWeatherInfo(todayInfoDefaultParam);
  const [twentyFourHourData, setTwentyFourHourData] = useState<any>();
  let example:twentyFourHourResult;

  useEffect(()=>{
    example = getTwentyHours(data);
    setTwentyFourHourData(example);
    console.log(twentyFourHourData)
  }, [])


  return (
    <div className='p-2 rounded-2xl h-40 border-2'>
      {
        Object.values(twentyFourHourData.todayConvertData).map((data:hourResult, index) => {

          const {PCP,POP,PTY, REH,SKY,SNO,TMP,UUU,VEC,VVV,WAV,WSD} = data;

          return (
            <div>
              <span>{twentyFourHourData.todayConvertData[index]}</span>
              <span>{PCP}</span>
              <span>{POP}</span>
              <span>{PTY}</span>
              <span>{REH}</span>
              <span>{SKY}</span>
              <span>{SNO}</span>
              <span>{TMP}</span>
              <span>{UUU}</span>
              <span>{VEC}</span>
              <span>{VVV}</span>
              <span>{WAV}</span>
              <span>{WSD}</span>
            </div>
          )
        })
      }
      {
        Object.values(twentyFourHourData.tomorrowConvertData).map((data:hourResult) => {

          const {PCP,POP,PTY, REH,SKY,SNO,TMP,UUU,VEC,VVV,WAV,WSD} = data;

          return (
            <div>
              <span>{PCP}</span>
              <span>{POP}</span>
              <span>{PTY}</span>
              <span>{REH}</span>
              <span>{SKY}</span>
              <span>{SNO}</span>
              <span>{TMP}</span>
              <span>{UUU}</span>
              <span>{VEC}</span>
              <span>{VVV}</span>
              <span>{WAV}</span>
              <span>{WSD}</span>
            </div>
          )
        })
      }
    </div>
  )
}
