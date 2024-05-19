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
import * as xlsx from 'xlsx';

function App() {
	const { isPending, status, data, error, isFetching } = useTodayWeatherInfo(
		todayInfoDefaultParam
	);
	const [twentyFourHourData, setTwentyFourHourData] = useState<any>(null); // null로 초기화
	const [threeDaysWeatherData, setThreeDaysWeatherData] = useState<any>(null); // null로 초기화
	
	const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState("");

  const handleConvert = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        setJsonData(JSON.stringify(json, null, 2));
      };
      reader.readAsBinaryString(file);
    }
  };

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
				<Main todayData={data.fullData}/>
				<TwentyFourWeatherGraph twentyFourHourData={twentyFourHourData} />
				<Summary />
				<WeekSummary threeDaysWeatherData={threeDaysWeatherData} />
			</div>
			<div>
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleConvert}>Convert</button>
      <pre>{jsonData}</pre>
    </div>
		</div>
	);
}

export default App;
