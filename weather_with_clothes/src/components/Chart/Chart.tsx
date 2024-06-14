import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

export default function BasicLineChart({ twentyFourHourData }) {
  console.log(twentyFourHourData); // 데이터 구조를 확인하기 위해 로그 출력

  if (!twentyFourHourData.arrayLength) {
    return <div>Data is not available</div>;
  }

  const todayData = Object.values(twentyFourHourData.todayConvertData);
  
  let tomorrowData = Object.values(twentyFourHourData.tomorrowConvertData).sort((a:any, b:any) => {
    if (Number(a.TIME_24) > Number(b.TIME_24)) {
      return 1;
    }
    if (a.TIME_24 < b.TIME_24) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  )
  
  const resultArray = [...todayData.map((ele)=> ele.TMP), ...tomorrowData.map((ele)=> ele.TMP)];
  
  return (
    <ChartContainer
    className=''
    width={1150}
    height={100}
    margin={{
      left: 10,
      top: 10
    }}
    series={[{ type: 'line', data: resultArray }]}
    xAxis={[{ scaleType: 'point', data: [21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] }]}
    sx={{
      [`& .${lineElementClasses.root}`]: {
        stroke: '#8884d8',
        strokeWidth: 2,
      },
      [`& .${markElementClasses.root}`]: {
        stroke: '#8884d8',
        scale: '0.8',
        fill: '#fff',
        strokeWidth: 2,
      },
    }}
    disableAxisListener
  >
    <LinePlot />
    <MarkPlot />
  </ChartContainer>
  );
}