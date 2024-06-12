import React, { useEffect, useState } from 'react'

export default function TempClothes({MaxTemp}) {

  const [recommendClothes, setRecommendClothes] = useState("");


  useEffect(()=>{
    if (MaxTemp > 28){
      setRecommendClothes("민소매, 반팔, 반바지, 짧은치마, 린넨 옷");
    } else if (MaxTemp < 28 ){
      setRecommendClothes("반팔, 얇은 셔츠, 반바지, 면바지")
    } else if (MaxTemp < 23) {
      setRecommendClothes("블라우스, 긴팔 티, 면바지, 슬랙스")
    } else if (MaxTemp < 20) {
      setRecommendClothes("얆은 가디건, 니트, 맨투맨, 후드, 긴 바지")
    } else if (MaxTemp < 17) {
      setRecommendClothes("자켓, 가디건, 청자켓, 니트, 스타킹, 청바지")
    } else if (MaxTemp < 12) {
      setRecommendClothes("트렌치코드, 야상, 점퍼, 스타킹, 기모바지")
    } else if (MaxTemp < 9) {
      setRecommendClothes("울 코트, 히트텍, 가죽 옷, 기모")
    } else {
      setRecommendClothes("패딩 두꺼운 코트, 누빔 옷, 기모, 목도리")
    }
  }, [recommendClothes])



  return (
    <p>오늘은 {recommendClothes}</p>
  )
}
