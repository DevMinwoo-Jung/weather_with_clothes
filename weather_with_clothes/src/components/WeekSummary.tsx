import React, { useEffect, useState } from 'react';
import {
	useShortLiveWeather,
	shortLiveWeatherdefaultParam,
	fetchWeekWeatherInfoParam,
	useWeekWeatherInfo,
} from '../API/weather';
import { filterData, filterLandData, getTwentyHours } from '../Utils/common';
import WeekInfoDays from './WeekInfo/WeekInfoDays';
import WeekInfoText from './WeekInfo/WeekInfoText';
import WeekMaxAndLowTmp from './WeekInfo/WeekMaxAndLowTmp';

export default function WeekSummary(props) {
	const { isPending, status, data, error, isFetching } = useShortLiveWeather(
		shortLiveWeatherdefaultParam
	);
	const [weekData, setWeekData] = useState<any>(null); // null로 초기화

	const {
		isPending: weekInfoPending,
		status: weekInfoStatus,
		data: weekInfoData,
		error: weekInfoError,
		isFetching: weekInfoFeching,
	} = useWeekWeatherInfo(fetchWeekWeatherInfoParam);
	const [weekInformationData, setWeekInformationData] = useState<any>(null); // null로 초기화

	const { threeDaysWeatherData } = props;

	useEffect(() => {
		if (status === 'success' && weekInfoStatus === 'success') {
			const responseData = filterData(data);
			const responseData2 = filterLandData(weekInfoData);
			setWeekData(responseData);
			setWeekInformationData(responseData2);
		}
	}, [data, status, weekInfoData, weekInfoStatus]);

	if (isPending) return <div>Loading...</div>;

	if (error) return <div>Error</div>;
	return (
		<div className='mt-4 p-2 rounded-2xl border-2 flex'>
			<WeekInfoDays />
			{threeDaysWeatherData && (
				<div className='block'>
					<WeekInfoText props={threeDaysWeatherData.todayInfo} />
					<WeekInfoText props={threeDaysWeatherData.tomorrowInfo} />
					<WeekInfoText props={threeDaysWeatherData.threeDaysLaterInfo} />
					<WeekMaxAndLowTmp
						weekData={weekData}
						weekInformationData={weekInformationData}
					/>
				</div>
			)}
		</div>
	);
}
