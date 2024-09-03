import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekInfoText({ props }) {
	const { MAX, MIN, SKY, PTY, TMN, TMX, POP } = props;

	return (
		<div className='flex w-full justify-end' key={Math.random()}>
			<span className='pr-2'>
        <RainDrop percent={POP}/>
        <span className='mr-2'>{POP}%</span>
      </span>
      <div className='flex pr-10'>
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
