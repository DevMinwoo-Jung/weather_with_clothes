import React, { useEffect, useState } from 'react'
import { useShortLiveWeather, shortLiveWeatherdefaultParam } from '../API/weather';
import { filterData, getTwentyHours } from '../Utils/common';
import WeekInfoDays from './WeekInfo/WeekInfoDays';
import WeekInfoText from './WeekInfo/WeekInfoText';

export default function WeekSummary(props) {
  const { isPending, status, data, error, isFetching } = useShortLiveWeather(shortLiveWeatherdefaultParam);
  const [weekData, setWeekData] = useState<any>(null); // null로 초기화
  
  const { threeDaysWeatherData } = props;

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
      <WeekInfoDays/>
      {
        threeDaysWeatherData && (
          <div className='block'>
            <WeekInfoText props={threeDaysWeatherData.todayInfo}/>
            <WeekInfoText props={threeDaysWeatherData.tomorrowInfo}/>
            <WeekInfoText props={threeDaysWeatherData.threeDaysLaterInfo}/>
            {weekData && (
            <div className='flex'>
              <div className='block' key={Math.random()}>
                {
                  Object.values(weekData.maxTempData).slice(0, 4).map((ele:any, index:any)=> {
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
                  Object.values(weekData.lowTempData).slice(0, 4).map((ele:any, index:any)=> {
                    return (
                      <>
                        <p key={Math.random()} className='mr-2'>{ele}</p>
                      </>
                    )
                  })  
                }
              </div>
            </div>
          )}          
          </div>
        )
      }
    </div>
  )
}

