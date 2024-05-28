import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({ twentyFourHourData }) {
  console.log(twentyFourHourData); // 데이터 구조를 확인하기 위해 로그 출력

  if (!twentyFourHourData.arrayLength) {
    return <div>Data is not available</div>;
  }

  const todayData = Object.values(twentyFourHourData.todayConvertData).map((ele)=> ele.TMP);
  const tomorrowData = Object.values(twentyFourHourData.tomorrowConvertData).map((ele)=> ele.TMP);

  console.log(...todayData, ...tomorrowData);
  return (
<LineChart
  series={[
    {
      data: [...todayData, ...tomorrowData],
    },
  ]}
  width={1150}
  height={150}
/>
  );
}