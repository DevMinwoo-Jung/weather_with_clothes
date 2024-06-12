import React from 'react'
import { FULL_TODAY } from '../API/weather';
import FirstTop from './Icons/Clothes/firstTop';
import TempClothes from './TempClothes';


export default function Main({todayData}) {

  const todayMaxTemp = Math.round(todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "TMX")[0].fcstValue);
  const todayMinTemp = Math.round(todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "TMP").sort((a, b) => Number(a.fcstValue) - Number(b.fcstValue))[0].fcstValue);
  const nowTemp = todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "TMP" && Number(ele.fcstTime.slice(0,2)) === new Date().getHours())[0].fcstValue;
  let nowCloud = todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "SKY" && Number(ele.fcstTime.slice(0,2)) === new Date().getHours())[0].fcstValue;
  let nowForcast = todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "PTY" && Number(ele.fcstTime.slice(0,2)) === new Date().getHours())[0].fcstValue;

  if(nowCloud < 6){
    nowCloud = "맑음";
  } else if (nowCloud < 9){
    nowCloud = "구름 많음";
  } else {
    nowCloud = "흐림";
  }

  switch (Number(nowForcast)) {
    case 1:
      nowForcast = "비";
      break;
    case 2:
      nowForcast = "비/눈";
      break;
    case 3:
      nowForcast = "눈";
      break;
    case 4:
      nowForcast = "소나기";
    break;
    default:
      break;
  }



  return (
    <section className='flex mt-8 h-48'>
      <div className='block w-1/2'>
        {
          Number(nowForcast) === 0 ? <p className='mt-4'>{nowCloud}</p> : <p className='mt-4'>{nowForcast}</p>
        }
        <p className='text-5xl'>{nowTemp}°</p>
        <p className='mt-8'>{todayMaxTemp}° / {todayMinTemp}°</p>
      </div>
      <div className='block'>
        <div className=''>
          <p>오늘은 외투챙겨요</p>
          <p>비와요 우산챙겨요</p>
        </div>
        <div className='mt-3 flex'>
          <TempClothes MaxTemp={todayMaxTemp}/>
        </div>
      </div>
    </section>
  )
}
