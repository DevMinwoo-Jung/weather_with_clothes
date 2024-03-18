import { useEffect } from 'react'
import './App.css'
import { defaultParam, useShortLiveWeather } from './API/weather';
import React from 'react';

function App() {
  const { status, data, error, isFetching } = useShortLiveWeather(defaultParam);

  useEffect(()=> {
    console.log(status, data, error, isFetching)
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
