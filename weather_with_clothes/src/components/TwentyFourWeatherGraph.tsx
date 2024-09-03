import React from 'react';
import Hour from './Hour/Hour';
import ChartExample from './Chart/Chart';

export default function TwentyFourWeatherGraph(props) {

  const { twentyFourHourData } = props;


  return (
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-52 border-2 border-colorFrame'>
      <div className='mb-2'></div>
      <div className='flex overflow-x-scroll no-scrollbar whitespace-nowrap'>
      {twentyFourHourData && (
        <div className='block mr-auto'>
          <div className='flex'>
            <Hour twentyFourHourData={twentyFourHourData} type='today'/>
            <Hour twentyFourHourData={twentyFourHourData} type='tomorrow'/>
          </div>
          <div className='p-0'>
            <ChartExample twentyFourHourData={twentyFourHourData}/>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}