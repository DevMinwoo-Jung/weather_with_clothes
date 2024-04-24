import React, { useEffect, useState } from 'react'
import { useShortLiveWeather, shortLiveWeatherdefaultParam } from '../API/weather';
import { getTwentyHours } from '../Utils/common';

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
      {weekData && (
        <>
          <div className='block'>
            {
              Object.values(weekData.maxTempData).slice(1).map((ele:any, index:any)=> {
                return (
                  <>
                    <p key={index} className='mr-2'>{ele}</p>
                  </>
                )
              })  
            }
          </div>
          <div className='block'>
          {
              Object.values(weekData.lowTempData).slice(1).map((ele:any, index:any)=> {
                return (
                  <>
                    <p key={index} className='mr-2'>{ele}</p>
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
  const response = data!.response.body.items.item[0]
  let filteredData = {};
  for (const key in response) {
      // "High" 또는 "Low"를 포함하지 않는 키만 새로운 객체에 할당
      if (!key.includes("High") && !key.includes("Low")) {
          filteredData[key] = data[key];
      }
  }

  const lowTempData = {};
  const maxTempData = {};
  const regId = {};

  for (const key in filteredData) {

    if(key.includes("Max")) {
      maxTempData[key] = filteredData[key];
    } else if (key.includes("Min")) {
      lowTempData[key] = filteredData[key];
    } else {
      regId[key] = filteredData[key];
    }
  }

  return { lowTempData, maxTempData, regId };
}
