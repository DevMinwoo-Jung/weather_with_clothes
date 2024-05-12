import React from 'react';
import RainDrop from '../Icons/RainDrop';

export default function WeekInfoText({ props }) {
	const { MAX, MIN, SKY, PTY, TMN, TMX, POP } = props;

	return (
		<div className='block' key={Math.random()}>
			<RainDrop percent={POP}/>
			<span className='pr-1'>{PTY.AM}</span>
			<span className='pr-1'>{PTY.PM}</span>
			<span className='pr-1'>{SKY.AM}</span>
			<span className='pr-1'>{SKY.PM}</span>
			<span className='pr-1'>{MAX}</span>
			<span className='pr-1'>{MIN}</span>
			<span className='pr-1'>{TMX}</span>
			<span className='pr-1'>{TMN}</span>
		</div>
	);
}
