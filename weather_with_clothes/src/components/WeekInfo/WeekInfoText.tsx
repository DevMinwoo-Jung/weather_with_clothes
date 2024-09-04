import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekInfoText({ props }) {
	const { MAX, MIN, SKY, PTY, TMN, TMX, POP } = props;

	return (
		<div className='flex w-full justify-between' key={Math.random()}>
			<div className='min-w-20 flex pr-2'>
        <RainDrop percent={POP}/>
        <span className='mr-2'>{POP}%</span>
      </div>
      <div className='flex md:pr-10 pr-1'>
        <span className='mr-2 h-7 pt-1'>
          <Weather key={Math.random()} condition={{"SKY": SKY.AM, "PTY": PTY.AM}}/>
        </span>
        <span className='mr-2 h-7 pt-1'>
          <Weather key={Math.random()} condition={{"SKY": SKY.PM, "PTY": PTY.PM}}/>
        </span>
      </div>
			<p className='pr-2 mr-2 h-7'>{Math.round(MAX)}°</p>
			<p className='pr-2 mr-2 h-7'>{Math.round(MIN)}°</p>
		</div>
	);
}
