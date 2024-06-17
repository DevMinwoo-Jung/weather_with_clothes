import React, { useEffect, useState } from 'react'
import { useWeekSummay, weekSummaryWeatherParam } from '../API/weather';
import { useSelector } from 'react-redux';
import { getCurrentDate } from '../Utils/common';

export default function Summary() {

  const location = useSelector((state) => state.location.location);

  const [region, setRegion] = useState(weekSummaryWeatherParam);


  useEffect(()=>{
    setRegion({
      numOfRows: "1000",
      pageNo: "1",
      stnId: location,
      tmFc: getCurrentDate(),
      dataType: "JSON"
    })
  }, [])
  

  const { isPending, status, data, error } = useWeekSummay(region);

  const [weekSummary, setWeekSummary] = useState(null);


  useEffect(() => {
      if (status === 'success') {        
        setWeekSummary(data.wfSv)
      }
  }, [status]);

  if (isPending) return "";

  if (error) return <div>Error</div>;

  return (
    <section className='mt-4 p-2 rounded-2xl	border-2'>{weekSummary}</section>
  )
}
