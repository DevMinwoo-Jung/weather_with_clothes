import React, { useEffect, useState } from 'react'
import { useTodayWeatherInfo, todayInfoDefaultParam } from '../API/weather';
import { twentyFourHourData } from '../Utils/weatherType';

export default function TwentyFourWeatherGraph() {

  const { status, data, error, isFetching } = useTodayWeatherInfo(todayInfoDefaultParam);
  const [twentyFourHourData, setTwentyFourHourData] = useState([]);

  useEffect(()=>{

    setTwentyFourHourData(data)
    console.log(twentyFourHourData);
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
