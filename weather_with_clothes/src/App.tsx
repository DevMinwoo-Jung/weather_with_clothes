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

function App() {
    const userLocation = useGeolocation();
    const [searchKeyword, setSearchKeyword] = useState<any>({});
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
            const twentyFourHourDataResult = getTwentyHours(data.resultData);
            const threeDaysWeatherInfoResult:any = threeDaysWeatherInfo(data.fullData);
            setTwentyFourHourData(twentyFourHourDataResult);
            setThreeDaysWeatherData(threeDaysWeatherInfoResult);
			let hangjungdongArr = hangjungdong.filter((ele)=> ((ele["격자 X"] == searchKeyword!["nx"]) && (ele["격자 Y"] == searchKeyword!["ny"]))); 
			const x = getNearNumber(searchKeyword!["latitude"], hangjungdongArr, "위도(초/100)");
			const y = getNearNumber(searchKeyword!["longitude"], hangjungdongArr, "경도(초/100)");
			setDefaultDong(searchKeyword);
					
        }
    }, [data, status]);

    if (isPending) return <SkletonMain />;

    if (error) return <div>Error</div>;

    return (
        <div className='min-w-screen min-h-screen text-colorText font-bold'>
            <div className='mobile:w-1/3 sm:w-2/3 mx-auto p-4 max-w-xl relative bg-colorMain border-2 rounded-lg border-colorHighLight border-opacity-60 m-2'>
                <Search setSearchKeyword={setSearchKeyword} setDong={setDong} />
                <Header userLocation={userLocation} dong={dong} />
                <Main todayData={data?.fullData} />
                <TwentyFourWeatherGraph twentyFourHourData={twentyFourHourData} />
                <WeekSummary threeDaysWeatherData={threeDaysWeatherData} />
                <Summary />
            </div>
        </div>
    );
}

export default App;


function getNearNumber(value, compareArr, flag) {
	let nearestValue = 0;
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