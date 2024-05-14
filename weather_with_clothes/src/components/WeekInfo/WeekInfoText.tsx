import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekInfoText({ props }) {
	const { MAX, MIN, SKY, PTY, TMN, TMX, POP } = props;

	return (
		<div className='flex w-16' key={Math.random()}>
			<span className='flex min-w-8 mr-9'>
        <RainDrop percent={POP}/>
        <span className='pr-1'>{POP}%</span>
      </span>
      <div className='flex'>
        <span className='mr-2 h-7 pt-1'>
          <Weather key={Math.random()} condition={{"SKY": SKY.AM, "PTY": PTY.AM}}/>
        </span>
        <span className='mr-2 h-7 pt-1'>
          <Weather key={Math.random()} condition={{"SKY": SKY.PM, "PTY": PTY.PM}}/>
        </span>
      </div>
			<span className='pr-3'>{Math.round(MAX)}</span>
			<span className='pr-1'>{Math.round(MIN)}</span>
			<span className='pr-1'>{TMX}</span>
			<span className='pr-1'>{TMN}</span>
		</div>
	);
}
