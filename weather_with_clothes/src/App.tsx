import { useEffect } from 'react'
import './index.css'
import { dailyInfoDefaultParam, defaultParam, todayInfoDefaultParam, useDailyWeatherInfo, useShortLiveWeather, useTodayWeatherInfo } from './API/weather';
import React from 'react';
import useGeolocation from './Utils/useGeolocation';
import ChartExample from './components/Chart/Chart';
import Header from './components/Header';

function App() {
  const { status, data, error, isFetching } = useShortLiveWeather(defaultParam);
  const { status:a, data:b, error:c, isFetching:d } = useDailyWeatherInfo(dailyInfoDefaultParam);
  const { status:aa, data:bb, error:cc, isFetching:dd } = useTodayWeatherInfo(todayInfoDefaultParam);

  const { userLocation } = useGeolocation();

  useEffect(()=> {
    console.log(status, data, error, isFetching);
    console.log(a, b, c, d);
    console.log(aa, bb, cc, dd);
    console.log(userLocation);
  }, []);

  return (
    <div className='min-w-screen min-h-screen bg-slate-500'>
      <div className='mobile:block mobile:w-1/3 sm:flex sm:w-2/3 m-auto p-4'>
        <Header/> 
        {/* <ChartExample/> */}
      </div>
    </div>
  )
}

export default App
