import { useEffect, useState } from 'react'
import './App.css'
import { dailyInfoDefaultParam, defaultParam, todayInfoDefaultParam, useDailyWeatherInfo, useShortLiveWeather, useTodayWeatherInfo } from './API/weather';
import React from 'react';

function App() {
  const { status, data, error, isFetching } = useShortLiveWeather(defaultParam);
  const { status:a, data:b, error:c, isFetching:d } = useDailyWeatherInfo(dailyInfoDefaultParam);
  const { status:aa, data:bb, error:cc, isFetching:dd } = useTodayWeatherInfo(todayInfoDefaultParam);

  const [userLocation, setUserLocation] = useState(null);

  // define the function that finds the users geolocation
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation(position);
          console.log(userLocation);
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };


  useEffect(()=> {
    console.log(status, data, error, isFetching);
    console.log(a, b, c, d);
    console.log(aa, bb, cc, dd);
    getUserLocation();
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
