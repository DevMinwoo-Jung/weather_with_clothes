import { useEffect, useState } from 'react'
import './App.css'
import { dailyInfoDefaultParam, defaultParam, todayInfoDefaultParam, useDailyWeatherInfo, useShortLiveWeather, useTodayWeatherInfo } from './API/weather';
import React from 'react';
import useGeolocation from './Utils/useGeolocation';
import ChartExample from './components/Chart/Chart';

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
  }, [])

  return (
    <div className='w-screen h-screen'>
      <h1 className="text-3xl font-bold underline">
        asdasd
      </h1>
      <ChartExample/>
    </div>
  )
}

export default App
