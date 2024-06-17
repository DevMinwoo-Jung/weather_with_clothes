import React, { useEffect, useState } from 'react'
import Home from './Icons/Home'
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import axios from 'axios';


export default function Header({userLocation, dong}) {

  const [region, setRegion] = useState('HOME');
  const { lat,lng } = userLocation;
  const [ex, setEx] = useState();

const kakaoApiKey = import.meta.env.VITE_REACT_APP_KAKAO_ADMIN_KEY; // 카카오 API 키

  const toggleRegion = () => {
    if(region === 'HOME') {
      setRegion('Office')
    } else {
      setRegion('HOME')
    }
  }

  useEffect(()=> {
    getDongInfo(lat, lng)
  }, [])

  const getDongInfo = async (lat, lng) => {
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${kakaoApiKey}`,
        },
      });
  
      const data = response.data;
      // 주소 정보 추출 (필요한 정보를 추출하세요)
      const dongInfo = data.documents[0].address.region_3depth_name;
      setEx(dongInfo)
      return dongInfo;
    } catch (error) {
      console.error('Error fetching dong info:', error);
    }
  };
  return (
    <div className='flex h-12'>
      <div className='cursor-pointer mr-6' onClick={toggleRegion}>{region === 'HOME' ? <Home size="medium"/> : <HiOutlineOfficeBuilding size="medium"/>}</div>
      {
        dong === null ? <div className='text-2xl leading-10'>{ex}</div> : <div className='text-2xl leading-10'>{dong}</div>
      }
      
    </div>
  )
}
