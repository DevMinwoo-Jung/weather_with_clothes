import { useEffect, useState } from 'react';
import './index.css';
import { useTodayWeatherInfo } from './API/weather';
import React from 'react';
import useGeolocation from './Utils/useGeolocation';
import Header from './components/Header';
import Main from './components/Main';
import Summary from './components/Summary';
import TwentyFourWeatherGraph from './components/TwentyFourWeatherGraph';
import WeekSummary from './components/WeekSummary';
import { getTodayFullDate, getTwentyHours, threeDaysWeatherInfo } from './Utils/common';
import * as xlsx from 'xlsx';
import Search from './components/Search';
import SkletonMain from './components/Skeleton/SkletonMain';
import { beobjungdong } from './Utils/beobjungdong';
import { hangjungdong } from './Utils/hangjungdong';

function App() {
    const userLocation = useGeolocation();
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [dong, setDong] = useState(null);

    useEffect(() => {
        if (userLocation) {
            setSearchKeyword({
                pageNo: "1",
                numOfRows: "1000",
                base_date: getTodayFullDate(),
                base_time: "0500",
                nx: userLocation.x,
                ny: userLocation.y,
								latitude: Math.trunc(userLocation.lat),
								longitude: Math.trunc(userLocation.lng)
            });
        }


    }, [userLocation]);

    const { isPending, status, data, error } = useTodayWeatherInfo(searchKeyword ? searchKeyword : undefined);

    const [twentyFourHourData, setTwentyFourHourData] = useState(null);
    const [threeDaysWeatherData, setThreeDaysWeatherData] = useState(null);


    useEffect(() => {
        if (status === 'success' && data) {
            const example = getTwentyHours(data.resultData);
            const ex2 = threeDaysWeatherInfo(data.fullData);
            setTwentyFourHourData(example);
            setThreeDaysWeatherData(ex2);
						
						console.log(hangjungdong.filter((ele)=> ((ele["격자 X"] == searchKeyword!["nx"]) && (ele["격자 Y"] == searchKeyword!["ny"]) && (ele["위도(시)"] == searchKeyword!["latitude"]) && (ele["경도(시)"] == searchKeyword!["longitude"]))))
						console.log(hangjungdong.filter((ele)=> ((ele["격자 X"] == searchKeyword!["nx"]) && (ele["격자 Y"] == searchKeyword!["ny"]))))
						console.log(Object.values(hangjungdong).filter((ele)=> ele["격자 X"] == searchKeyword["nx"]))
						console.log(searchKeyword["latitude"])
						console.log(searchKeyword["nx"])

        }
    }, [data, status]);

    if (isPending) return <SkletonMain />;

    if (error) return <div>Error</div>;

    return (
        <div className='min-w-screen min-h-screen bg-slate-500 text-white font-bold'>
            <div className='mobile:w-1/3 sm:w-2/3 m-auto p-4 max-w-xl relative'>
                <Search setSearchKeyword={setSearchKeyword} setDong={setDong} />
                <Header dong={dong} />
                <Main todayData={data?.fullData} />
                <TwentyFourWeatherGraph twentyFourHourData={twentyFourHourData} />
                <Summary />
                <WeekSummary threeDaysWeatherData={threeDaysWeatherData} />
            </div>
            <div>
            </div>
        </div>
    );
}

export default App;
