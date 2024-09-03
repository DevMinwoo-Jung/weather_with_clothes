import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

export default function BasicLineChart({ twentyFourHourData }) {

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
    width={1250}
    height={120}
    margin={{
      left: 10,
      top: 10
    }}
    series={[{ type: 'line', data: resultArray }]}
    xAxis={[{ scaleType: 'point', data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 24] }]}
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