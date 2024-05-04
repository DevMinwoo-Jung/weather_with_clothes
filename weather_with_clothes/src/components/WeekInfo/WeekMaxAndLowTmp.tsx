import React from 'react';

export default function WeekMaxAndLowTmp({ weekData, weekInformationData }) {
	console.log(weekData, weekInformationData);
	return (
		<>
			{weekData && weekInformationData && (
				<div className='flex'>
					<div className='block' key={Math.random()}>
						{Object.values(weekData.maxTempData)
							.slice(0, 4)
							.map((ele: any, index: any) => {
								return (
									<>
										<p key={Math.random()} className='mr-2'>
											{ele}
										</p>
									</>
								);
							})}
					</div>
					<div className='block' key={Math.random()}>
						{Object.values(weekData.lowTempData)
							.slice(0, 4)
							.map((ele: any, index: any) => {
								return (
									<>
										<p key={Math.random()} className='mr-2'>
											{ele}
										</p>
									</>
								);
							})}
					</div>
				</div>
			)}
		</>
	);
}
