import { useEffect } from 'react'
import './App.css'
import { dailyInfoDefaultParam, defaultParam, todayInfoDefaultParam, useDailyWeatherInfo, useShortLiveWeather, useTodayWeatherInfo } from './API/weather';
import React from 'react';

function App() {
  const { status, data, error, isFetching } = useShortLiveWeather(defaultParam);
  const { status:a, data:b, error:c, isFetching:d } = useDailyWeatherInfo(dailyInfoDefaultParam);
  const { status:aa, data:bb, error:cc, isFetching:dd } = useTodayWeatherInfo(todayInfoDefaultParam);

  useEffect(()=> {
    console.log(status, data, error, isFetching);
    console.log(a, b, c, d);
    console.log(aa, bb, cc, dd);
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
