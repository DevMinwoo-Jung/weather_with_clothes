import React from 'react';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import RainDrop from '../Icons/RainDrop';

export default function WeekMaxAndLowTmp({ weekData, weekInformationData }) {
	return (
		<>
			{weekData && weekInformationData && (
				<div className='flex'>
					<div>
						{weekInformationData.rainParis
							.slice(0, 4)
							.map((ele: any, index: number) => {
								return (
									<>
										<p key={Math.random()} className='mr-2'>
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
									<>
										<p key={Math.random()} className='mr-2'>
											{ele}
										</p>
									</>
								);
							})}
					</div>
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
						{Object.values(weekInformationData)
							.slice(11)
							.map((ele: any, index: any) => {
								return (
									<>
										<p key={Math.random()} className='mr-2'>
											{ele}
										</p>
									</>
								);
							})}
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
