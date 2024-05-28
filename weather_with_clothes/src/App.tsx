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
import Search from './components/Search';
import SkletonMain from './components/Skeleton/SkletonMain';
import { hangjungdong } from './Utils/hangjungdong';
import ChartExample from './components/Chart/Chart';

function App() {
    const userLocation = useGeolocation();
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [dong, setDong] = useState<any>(null);
		const [defaultDong, setDefaultDong] = useState(null)

    useEffect(() => {
        if (userLocation) {
            setSearchKeyword({
                pageNo: "1",
                numOfRows: "1000",
                base_date: getTodayFullDate(),
                base_time: "0500",
                nx: userLocation.x,
                ny: userLocation.y,
								latitude: userLocation.lat,
								longitude: userLocation.lng
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
						let hangjungdongArr = hangjungdong.filter((ele)=> ((ele["격자 X"] == searchKeyword!["nx"]) && (ele["격자 Y"] == searchKeyword!["ny"]))); 
						const x = getNearNumber(searchKeyword!["latitude"], hangjungdongArr, "위도(초/100)");
						const y = getNearNumber(searchKeyword!["longitude"], hangjungdongArr, "경도(초/100)");
						setDefaultDong(searchKeyword)
					
        }
    }, [data, status]);

    if (isPending) return <SkletonMain />;

    if (error) return <div>Error</div>;

    return (
        <div className='min-w-screen min-h-screen bg-slate-500 text-white font-bold'>
            <div className='mobile:w-1/3 sm:w-2/3 m-auto p-4 max-w-xl relative'>
                <Search setSearchKeyword={setSearchKeyword} setDong={setDong} />
                <Header userLocation={userLocation} dong={dong} />
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


function getNearNumber(value, compareArr, flag) {
	let nearestValue = null;
	let minDifference = Infinity;

	compareArr.forEach((ele) => {
		const currentValue = Number(ele[flag]);
		const difference = Math.abs(currentValue - value);

		if (difference < minDifference) {
			minDifference = difference;
			nearestValue = currentValue;
		}
	});

	return nearestValue;
}