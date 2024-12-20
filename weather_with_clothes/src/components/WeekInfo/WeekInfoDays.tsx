import React, { useEffect } from 'react';
import { getDaysInfo } from '../../Utils/common';
import { useState } from 'react';

export default function WeekInfoImg() {
	const [weekDays, setWeekDays] = useState<string[]>();

	useEffect(() => {
		setWeekDays(getDaysInfo());
	}, []);

	return (
		<div>
			{weekDays &&
				weekDays.map((ele: string) => {
					return <p key={ele} className='leading-7 h-7'>{ele}</p>;
				})}
		</div>
	);
}
