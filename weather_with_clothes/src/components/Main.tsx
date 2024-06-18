import React from 'react'
import { FULL_TODAY } from '../API/weather';
import TempClothes from './TempClothes';


export default function Main({todayData}) {

  const todayMaxTemp = Math.round(todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "TMX")[0].fcstValue);
  const todayMinTemp = Math.round(todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "TMP").sort((a, b) => Number(a.fcstValue) - Number(b.fcstValue))[0].fcstValue);
  const nowTemp = todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "TMP" && Number(ele.fcstTime.slice(0,2)) === new Date().getHours())[0].fcstValue;
  let nowCloud = todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "SKY" && Number(ele.fcstTime.slice(0,2)) === new Date().getHours())[0].fcstValue;
  let nowForcast = todayData.filter(ele=> ele.fcstDate === FULL_TODAY && ele.category === "PTY" && Number(ele.fcstTime.slice(0,2)) === new Date().getHours())[0].fcstValue;
  let forcastSummary = "";
  console.log(nowForcast)

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
      forcastSummary = "오늘은 비가와요, 우산을 챙기는게 좋겠어요";
      break;
    case 2:
      nowForcast = "비/눈";
      forcastSummary = "오늘은 비가와요, 우산을 챙기는게 좋겠어요";
      break;
    case 3:
      nowForcast = "눈";
      forcastSummary = "오늘은 눈이와요";
      break;
    case 4:
      nowForcast = "소나기";
      forcastSummary = "오늘은 곳곳에 소나기가 와요, 우산을 챙기는게 좋겠어요";
    break;
    default:
      forcastSummary = "오늘은 날씨가 화창해요";
      break;
  }

  if(nowForcast === 2 && Number(todayMaxTemp) > 5){
    forcastSummary = "오늘은 눈이와요";
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
            <p className='mt-4'>{forcastSummary}</p>
        </div>
        <div className='mt-3 flex'>
          <TempClothes MaxTemp={todayMaxTemp}/>
        </div>
      </div>
    </section>
  )
}
