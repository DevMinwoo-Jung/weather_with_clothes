import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekInfoText({ props }) {
	const { MAX, MIN, SKY, PTY, TMN, TMX, POP } = props;

	return (
		<div className='w-[390px] flex' key={Math.random()}>
			<div className='w-[72px] mr-[80px]'>
        <div className='flex'>
          <p className='h-7 mr-2'>
            <RainDrop percent={POP}/>
            {POP}%
          </p>
        </div>
      </div>
      <div className='w-[75px] flex md:pr-10 mr-[90px]'>
        <span className='mr-2 h-7 pt-1'>
          <Weather key={Math.random()} condition={{"SKY": SKY.AM, "PTY": PTY.AM}}/>
        </span>
        <span className='mr-2 h-7 pt-1'>
          <Weather key={Math.random()} condition={{"SKY": SKY.PM, "PTY": PTY.PM}}/>
        </span>
      </div>
      <div className='flex text-right'>
        <div className='block'>
          <p className='w-3 mr-8 h-7'>{Math.round(MAX)}°</p>
        </div>
        <div className='block'>
          <p className='w-3 h-7'>{Math.round(MIN)}°</p>
        </div>
      </div>
		</div>
	);
}
