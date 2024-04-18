import React from 'react'
import { hourResult } from '../../Utils/weatherType'

type HourType = {
  twentyFourHourData: any;
  type: string;
}

export default function Hour(props:HourType) {

  const { todayConvertData, tomorrowConvertData } = props.twentyFourHourData;

  const type = props.type === 'today' ? todayConvertData : tomorrowConvertData;

  return (
    <>
      {Object.values(type).map((data: any, index) => {
        const { POP, TMP, REH, TIME } = data;
          return (
            <div className='mr-2 text-center' key={index}> {/* 각각의 요소에 key 추가 */}
              <span className='text-sm'>{TIME}</span>
              <p className='text-xl'>{TMP}°</p>
              <p>{REH}</p>
              <p>{POP}</p> 
              {/* 강수확률 */}
            </div>
          );
        })
        }
    </>
  )
}
