import { useEffect, useState } from 'react'
import './App.css'
import { shortLiveWeatherParam, useShortLiveWeather } from './API/weather';
import React from 'react';

function App() {

  const [data, setData] = useState();
  const defaultParam:shortLiveWeatherParam = {
    numOfRows: "1",
    pageNo: "10",
    stnId: "10",
    tmFc: "1",
    dataType: "JSON"
  }

  useEffect(()=> {
    useShortLiveWeather(defaultParam)
  }, [])
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        {data}
      </h1>
    </>
  )
}

export default App
