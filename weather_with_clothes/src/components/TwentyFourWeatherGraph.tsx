import React, { useEffect, useState } from 'react';
import { useTodayWeatherInfo, todayInfoDefaultParam } from '../API/weather';
import { getTwentyHours } from '../Utils/common';

export default function TwentyFourWeatherGraph() {
  const { isPending, status, data, error, isFetching } = useTodayWeatherInfo(todayInfoDefaultParam);
  const [twentyFourHourData, setTwentyFourHourData] = useState<any>(null); // null로 초기화
  useEffect(() => {
    if (status === 'success') {
      const example = getTwentyHours(data);
      setTwentyFourHourData(example);
    }
  }, [data, status]); // useEffect will trigger when data or status changes

  if(isPending) return <div>Loading...</div>

  if(error) return <div>Error</div>

  console.log(twentyFourHourData)

  return (
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-40 border-2'>
      <p className='mb-2'>밤에도 맑은 날씨가 이어져요</p>
      <div className='border-t-2 mb-2'></div>
      <div className='flex overflow-x-scroll no-scrollbar'>
      {twentyFourHourData && (
        <>
          {Object.values(twentyFourHourData.todayConvertData).map((data: any, index) => {
            const { POP, TMP, REH, TIME } = data;
            return (
              <div key={index}> {/* 각각의 요소에 key 추가 */}
                <span>{TIME}</span>
                <p>{TMP}</p>
                <p>{POP}</p>
                <p>{REH}</p>
              </div>
            );
          })}
          {Object.values(twentyFourHourData.tomorrowConvertData).map((data: any, index) => {
            const { POP, TMP, REH, TIME } = data;
            return (
              <div key={index}> {/* 각각의 요소에 key 추가 */}
                <span>{TIME}</span>
                <p>{TMP}</p>
                <p>{POP}</p>
                <p>{REH}</p>
              </div>
            );
          })}
        </>
      )}
      </div>
    </div>
  );
}