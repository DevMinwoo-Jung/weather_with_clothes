import React from 'react';
import RainDrop from '../Icons/RainDrop';
import Weather from '../Icons/Weather';

export default function WeekMaxAndLowTmp({ weekData, weekInformationData }) {
	return (
		<>
			{weekData && weekInformationData && (
				<div className='md:w-[390px] w-[250px] flex' key={Math.random()}>
					<div className='w-[72px] md:mr-[80px] mr-[15px]'>
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
					<div className='w-[75px] md:mr-[80px] mr-[10px]'>
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
											<p key={Math.random()} className='w-3 md:mr-8 mr-6 h-7'>
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
