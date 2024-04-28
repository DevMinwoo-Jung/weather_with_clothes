import React, { useEffect, useState } from 'react'
import { useShortLiveWeather, shortLiveWeatherdefaultParam } from '../API/weather';
import { filterData, getTwentyHours } from '../Utils/common';
import WeekInfoImg from './WeekInfo/WeekInfoImg';

export default function WeekSummary() {
  const { isPending, status, data, error, isFetching } = useShortLiveWeather(shortLiveWeatherdefaultParam);
  const [weekData, setWeekData] = useState<any>(null); // null로 초기화
  
  useEffect(() => {
    if (status === 'success') {
      const responseData = filterData(data);
      setWeekData(responseData);
    }
  }, [data, status]);

  if(isPending) return <div>Loading...</div>

  if(error) return <div>Error</div>

  return (
    <div className='mt-4 p-2 rounded-2xl border-2 flex'>
      <WeekInfoImg/>
      {weekData && (
        <>
          <div className='block' key={Math.random()}>
            {
              Object.values(weekData.maxTempData).slice(1).map((ele:any, index:any)=> {
                return (
                  <>
                    <p key={Math.random()} className='mr-2'>{ele}</p>
                  </>
                )
              })  
            }
          </div>
          <div className='block' key={Math.random()}>
          {
              Object.values(weekData.lowTempData).slice(1).map((ele:any, index:any)=> {
                return (
                  <>
                    <p key={Math.random()} className='mr-2'>{ele}</p>
                  </>
                )
              })  
            }
          </div>
        </>
      )}
    </div>
  )
}

