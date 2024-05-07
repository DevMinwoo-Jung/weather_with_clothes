import { useEffect, useState } from 'react';
import './index.css';
import {
	dailyInfoDefaultParam,
	todayInfoDefaultParam,
	useDailyWeatherInfo,
	useShortLiveWeather,
	useTodayWeatherInfo,
} from './API/weather';
import React from 'react';
import useGeolocation from './Utils/useGeolocation';
import ChartExample from './components/Chart/Chart';
import Header from './components/Header';
import Main from './components/Main';
import Summary from './components/Summary';
import TwentyFourWeatherGraph from './components/TwentyFourWeatherGraph';
import WeekSummary from './components/WeekSummary';
import { getTwentyHours, threeDaysWeatherInfo } from './Utils/common';

function App() {
	const { isPending, status, data, error, isFetching } = useTodayWeatherInfo(
		todayInfoDefaultParam
	);
	const [twentyFourHourData, setTwentyFourHourData] = useState<any>(null); // null로 초기화
	const [threeDaysWeatherData, setThreeDaysWeatherData] = useState<any>(null); // null로 초기화

	useEffect(() => {
		if (status === 'success') {
			const example = getTwentyHours(data.resultData);
			console.log(data.fullData);
			const ex2 = threeDaysWeatherInfo(data.fullData);
			setTwentyFourHourData(example);
			setThreeDaysWeatherData(ex2);
		}
	}, [data, status]); // useEffect will trigger when data or status changes

	if (isPending) return <div>Loading...</div>;

	if (error) return <div>Error</div>;

	return (
		<div className='min-w-screen min-h-screen bg-slate-500 text-white font-bold'>
			<div className='mobile:w-1/3 sm:w-2/3 m-auto p-4 max-w-xl'>
				<Header />
				<Main />
				<TwentyFourWeatherGraph twentyFourHourData={twentyFourHourData} />
				<Summary />
				<WeekSummary threeDaysWeatherData={threeDaysWeatherData} />
			</div>
		</div>
	);
}

export default App;
