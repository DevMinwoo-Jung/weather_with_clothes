import React from 'react';

export default function WeekInfoText({ props }) {
	const { MAX, MIN, SKY, PTY, TMN, TMX, POP } = props;

	return (
		<div className='block' key={Math.random()}>
			<span className='pr-1'>{POP}</span>
			<span className='pr-1'>{PTY}</span>
			<span className='pr-1'>{SKY.AM}</span>
			<span className='pr-1'>{SKY.PM}</span>
			<span className='pr-1'>{MAX}</span>
			<span className='pr-1'>{MIN}</span>
			<span className='pr-1'>{TMX}</span>
			<span className='pr-1'>{TMN}</span>
		</div>
	);
}
