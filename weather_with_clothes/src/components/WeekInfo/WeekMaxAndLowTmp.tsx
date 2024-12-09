import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekMaxAndLowTmp({ weekData, weekInformationData }) {
	return (
		<>
			{weekData && weekInformationData && (
				<div className='w-[390px] flex'>
					<div className='w-[72px] mr-[80px]' key={Math.random()}>
						{weekInformationData.rainParis
							.slice(0, 4)
							.map((ele: any, index: number) => {
								return (
									<div className='flex'>
										<p key={Math.random()} className='h-7 mr-2'>
                      <RainDrop percent={ele}/>
											{ele}%
										</p>
									</div>
								);
							})}
					</div>
					<div className='w-[75px] md:pr-10 mr-[90px]'>
						{Object.values(weekInformationData.weatherPairs)
							.slice(0, 4)
							.map((ele: any, index: number) => {
								return (
									<div className='flex md:pr-10 pr-1'> 
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
					<div className='flex'>
						<div className='block' key={Math.random()}>
							{Object.values(weekData.maxTempData)
								.slice(0, 4)
								.map((ele: any, index: any) => {
									return (
										<>
											<p key={Math.random()} className='w-3 mr-8 h-7'>
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
											<p key={Math.random()} className='w-3 mr-2 h-7'>
												{ele}°
											</p>
										</>
									);
								})}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
