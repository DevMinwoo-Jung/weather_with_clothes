import React, { useEffect } from 'react'
import { filterData, filterLandData, getDaysInfo } from '../../Utils/common';
import { useState } from 'react';
import { useWeekWeatherInfo, fetchWeekWeatherInfoParam } from '../../API/weather';

export default function WeekInfoImg() {

  const { isPending, status, data, error, isFetching } = useWeekWeatherInfo(fetchWeekWeatherInfoParam);
  const [weekData, setWeekData] = useState<any>(null); // null로 초기화
  const [weekDays, setWeekDays] = useState<string[]>();

  useEffect(() => {
    if (status === 'success') {
      const responseData = (data);
      setWeekData(responseData);
      console.log(weekData)
      console.log(filterLandData(weekData))
      setWeekDays(getDaysInfo())
    }
  }, [data, status]);

  if(isPending) return <div>Loading...</div>

  if(error) return <div>Error</div>


  return (
    <div>
      {
        weekDays && 
        weekDays.map((ele:string)=> {
          return (
            <p>{ele}</p>
          )
        })
      }
    </div>
  )
}