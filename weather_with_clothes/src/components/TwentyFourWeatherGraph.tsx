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


  return (
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-40 border-2'>
      <p className='mb-2'>밤에도 맑은 날씨가 이어져요</p>
      <div className='border-t-2 mb-2'></div>
      <div className='flex'>
      {twentyFourHourData && (
        <>
          {Object.values(twentyFourHourData.todayConvertData).map((data: any, index) => {
            const { PCP, POP, PTY, REH, SKY, SNO, TMP, UUU, VEC, VVV, WAV, WSD } = data;
            return (
              <div key={index}> {/* 각각의 요소에 key 추가 */}
                <span>{index}</span>
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
            );
          })}
          {Object.values(twentyFourHourData.tomorrowConvertData).map((data: any, index) => {
            const { PCP, POP, PTY, REH, SKY, SNO, TMP, UUU, VEC, VVV, WAV, WSD } = data;
            return (
              <div key={index}> {/* 각각의 요소에 key 추가 */}
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
            );
          })}
        </>
      )}
      </div>
    </div>
  );
}