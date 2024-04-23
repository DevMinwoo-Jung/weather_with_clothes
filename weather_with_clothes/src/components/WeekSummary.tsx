import React, { useEffect, useState } from 'react'
import { useShortLiveWeather, shortLiveWeatherdefaultParam } from '../API/weather';
import { getTwentyHours } from '../Utils/common';

export default function WeekSummary() {
  const { isPending, status, data, error, isFetching } = useShortLiveWeather(shortLiveWeatherdefaultParam);
  const [weekData, setWeekData] = useState<any>(null); // null로 초기화
  
  useEffect(() => {
    setWeekData(filterData(data.response.body.items.item[0]));
    console.log(weekData)
  }, [data, status]); // useEffect will trigger when data or status changes

  if(isPending) return <div>Loading...</div>

  if(error) return <div>Error</div>

  return (
    <div className='mt-4 p-2 rounded-2xl border-2'>
      {weekData && (
        <>
        {
          <p>{weekData.regId}</p>}
          <div>
            {
              Object.values(weekData).slice(1).map((ele:any, index:any)=> {
                return (
                  <>
                    <span className='mr-2'>{ele}</span>
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

// 데이터 필터링 함수 정의
function filterData(data) {
  let filteredData = {};
  for (const key in data) {
      // "High" 또는 "Low"를 포함하지 않는 키만 새로운 객체에 할당
      if (!key.includes("High") && !key.includes("Low")) {
          filteredData[key] = data[key];
      }
  }

  return filteredData;
}
