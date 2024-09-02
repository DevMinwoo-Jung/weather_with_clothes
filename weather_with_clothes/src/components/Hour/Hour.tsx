import React from 'react'

type HourType = {
  twentyFourHourData: any;
  type: string;
}

export default function Hour(props:HourType) {

  const { todayConvertData, tomorrowConvertData } = props.twentyFourHourData;

  let type = props.type === 'today' ? todayConvertData : tomorrowConvertData;

  if (type === tomorrowConvertData) {
    type = Object.values(type).sort((a:any, b:any) => {
      if (Number(a.TIME_24) > Number(b.TIME_24)) {
        return 1;
      }
      if (a.TIME_24 < b.TIME_24) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }
  )}

  return (
    <>
      {Object.values(type).map((data: any, index) => {
        const { POP, TMP, REH, TIME } = data;
          return (
            <div className='mr-2 text-center' key={index}> {/* 각각의 요소에 key 추가 */}
              <span className='text-sm'>{TIME}</span>
              <p>{REH}</p>
              <p>{POP}%</p> 
              <p className='text-xl'>{TMP}°</p>
            </div>
          );
        })
        }
    </>
  )
}
