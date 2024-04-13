import React, { useEffect, useState } from 'react'
import { useTodayWeatherInfo, todayInfoDefaultParam } from '../API/weather';
import { twentyFourHourData } from '../Utils/weatherType';
import { getTwentyHours } from '../Utils/common';

export default function TwentyFourWeatherGraph() {

  const { status, data, error, isFetching } = useTodayWeatherInfo(todayInfoDefaultParam);
  const [twentyFourHourData, setTwentyFourHourData] = useState<twentyFourHourData[]>([]);
  const arrayLength = 24;
  let example:any = "";

  useEffect(()=>{
    example = getTwentyHours(data);
    // setTwentyFourHourData(example);
    
  }, [])


  return (
    <div className='p-2 rounded-2xl h-40 border-2'>
      {twentyFourHourData.map((ele:twentyFourHourData)=> {

        return (
          <span>{ele.fcstTime}</span>
        )
      })}
    </div>
  )
}
