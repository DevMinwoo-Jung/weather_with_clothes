import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekMaxAndLowTmp({ weekData, weekInformationData }:any) {
	return (
		<>
			{weekData && weekInformationData && (
				<div className='flex'>
					<div className='pr-2' key={Math.random()}>
						{weekInformationData.rainParis
							.slice(0, 4)
							.map((ele: any, index: number) => {
								return (
									<>
										<p key={Math.random()} className='h-7 mr-2'>
                      <RainDrop percent={ele}/>
											{ele}%
										</p>
									</>
								);
							})}
					</div>
					<div>
						{Object.values(weekInformationData.weatherPairs)
							.slice(0, 4)
							.map((ele: any, index: number) => {
								return (
									<div className='flex pr-10' key={ele+index}> 
										<span key={Math.random()} className='mr-2 h-7 pt-1'>
											<Weather condition={ele.split(" ")[0]}/>
										</span>
										<span key={Math.random()} className='mr-2 h-7 pt-1'>
											<Weather condition={ele.split(" ")[1]}/>
										</span>
									</div>
								);
							})}
					</div>
					<div className='block' key={Math.random()}>
						{Object.values(weekData.maxTempData)
							.slice(0, 4)
							.map((ele: any, index: any) => {
								return (
									<>
										<p key={Math.random()} className='pr-2 mr-2 h-7'>
											{ele}°
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
										<p key={Math.random()} className='mr-2 h-7'>
											{ele}°
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
