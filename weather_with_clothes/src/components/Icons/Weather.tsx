import React from 'react'
import IconWiSnow from './Snow'
import { BsCloudSnowFill } from "react-icons/bs";
import { BsCloudSnow } from "react-icons/bs";
import { IoRainy } from "react-icons/io5";
import { IoRainyOutline } from "react-icons/io5";
import { RiHeavyShowersLine } from "react-icons/ri";
import { RiHeavyShowersFill } from "react-icons/ri";
import { FaCloud } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

export default function Weather({condition}) {
  console.log(condition)
  let icon =  "";
  if(typeof(condition) === "string") {
    if (condition.includes("구름많음")) {
      if (condition.includes("비")) {
          // 구름 많음, 비/눈 혼합
          return  <IoRainyOutline/>
      } else if (condition.includes("눈")) {
          return <BsCloudSnow/>
      } else if (condition.includes("소나기")) {
          // 구름 많음, 소나기
          return <RiHeavyShowersLine/>
      }  else {
          // 구름 많음
          return <CiCloudOn/>
      }
    } else if (condition.includes("흐리고")) {
      if (condition.includes("비")) {
          // 흐림, 비/
          console.log('여기오지?')
          return <IoRainy />
      } else if (condition.includes("눈")) {
        // 흐림, 눈
        return <BsCloudSnowFill />
      } else if(condition.includes("소나기")) {
        return <RiHeavyShowersFill/>
      } else {
        // 흐림
        return <FaCloud/>
      }
    } else if(condition.includes("비")) {
      return <IoRainy />
      // return <FontAwesomeIcon icon="fa-sharp fa-thin fa-raindrops" />
    } else if(condition.includes("눈")) {
      return <IconWiSnow/>
    } else {
      // 맑음
      return <IoSunnyOutline/>
    }
  
  } else {
    if (condition.SKY === "3" ) {
      if (condition.PTY === "1") {
          // 구름 많음, 비/눈 혼합
          return  <IoRainyOutline/>
      } else if ( condition.PTY === "3") {
          return <BsCloudSnow/>
      } else if ( condition.PTY === "4") {
          // 구름 많음, 소나기
          return <RiHeavyShowersLine/>
      } else if (condition.PTY === "2") {
        // 근데 이건 비/눈이라 어케 해야하나
        return  <IoRainyOutline/>
      } else {
          // 구름 많음
          return <CiCloudOn/>
      }
    } else if (condition.SKY === "4") {
      if (condition.PTY === "1") {
          // 흐림, 비/
          return <IoRainy />
      } else if (condition.PTY === "3") {
        // 흐림, 눈
        return <BsCloudSnowFill />
      } else if(condition.PTY === "4") {
        return <RiHeavyShowersFill/>
      } else {
        // 흐림
        return <FaCloud/>
      }
    } else if(condition.SKY === "1") {
      return <IoSunnyOutline/>
    } else {
      if (condition.PTY === "3") {
        // 흐림, 눈
        return <BsCloudSnowFill />
      } else if(condition.PTY === "4") {
        return <RiHeavyShowersFill/>
      } else {
        // 흐림
        return <FaCloud/>
      }
    } 
  }


}
