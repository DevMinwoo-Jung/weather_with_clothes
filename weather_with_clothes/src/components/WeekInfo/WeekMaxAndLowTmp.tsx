import React from 'react';

export default function WeekMaxAndLowTmp({ weekData, weekInformationData }) {
	console.log(weekData, weekInformationData);
	console.log(weekInformationData);

	// for (let i = 0; i < Object.keys(weekInformationData).length; i + 2) {

	// }

	return (
		<>
			{weekData && weekInformationData && (
				<div className='flex'>
					<div>
						{weekInformationData.rnStPairs.map((ele: any, index: number) => {
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
				</div>
			)}
		</>
	);
}
