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
			const responseData2 = renderSeparatedObjects(
				filterLandData(weekInfoData)
			);
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

function renderSeparatedObjects(obj) {
	const rnStPairs: any = [];
	const wfPairs: any = [];

	// 주어진 객체를 순회하면서 rnSt와 wf로 시작하는 키를 분리
	for (const key in obj) {
		if (key.startsWith('rnSt')) {
			rnStPairs.push(obj[key]);
		} else if (key.startsWith('wf')) {
			wfPairs.push(obj[key]);
		}
	}

	// // rnSt 객체 렌더링
	// const rnStHTML = rnStPairs.map(pair => `<p>${pair[0]}: ${pair[1]}</p>`).join('');
	// const rnStRenderedHTML = `<div>${rnStHTML}</div>`;

	// // wf 객체 렌더링
	// const wfHTML = wfPairs.map(pair => `<p>${pair[0]}: ${pair[1]}</p>`).join('');
	// const wfRenderedHTML = `<div>${wfHTML}</div>`;

	return { rnStPairs, wfPairs };
}
