import React, { useEffect, useState } from 'react'
import { useShortLiveWeather, shortLiveWeatherdefaultParam } from '../API/weather';
import { getTwentyHours } from '../Utils/common';

export default function WeekSummary() {
  const { isPending, status, data, error, isFetching } = useShortLiveWeather(shortLiveWeatherdefaultParam);
  const [weekData, setWeekData] = useState<any>(null); // null로 초기화
  
  useEffect(() => {
    console.log(data.response.body.items.item[0])
    setWeekData(data);
  }, [data, status]); // useEffect will trigger when data or status changes

  if(isPending) return <div>Loading...</div>

  if(error) return <div>Error</div>



  return (
    <div className='mt-4 p-2 rounded-2xl border-2'>WeekSummary</div>
  )
}
