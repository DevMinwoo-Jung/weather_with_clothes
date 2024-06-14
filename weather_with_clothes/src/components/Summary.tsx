import React, { useEffect, useState } from 'react'
import { useWeekSummay, weekSummaryWeatherParam } from '../API/weather';

export default function Summary() {

  const { isPending, status, data, error } = useWeekSummay(weekSummaryWeatherParam);

  const [weekSummary, setWeekSummary] = useState(null);


  useEffect(() => {
      if (status === 'success') {        
        setWeekSummary(data.wfSv)
      }
  }, [status]);

  console.log(weekSummary)

  if (isPending) return "";

  if (error) return <div>Error</div>;

  return (
    <section className='mt-4 p-2 rounded-2xl	border-2'>{weekSummary}</section>
  )
}
