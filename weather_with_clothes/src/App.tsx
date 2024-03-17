import { useEffect, useState } from 'react'
import './App.css'
import { shortLiveWeatherParam, fetchShortLiveWeather } from './API/weather';
import React from 'react';

function App() {

  const [data, setData] = useState();
  const defaultParam:shortLiveWeatherParam = {
    numOfRows: "10",
    pageNo: "1",
    regId: "11B10101",
    tmFc: "202403170600",
    dataType: "JSON"
  }

  useEffect(()=> {
    fetchShortLiveWeather(defaultParam)
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
