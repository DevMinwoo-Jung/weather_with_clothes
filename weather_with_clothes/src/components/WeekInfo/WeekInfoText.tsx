import React from 'react'

export default function WeekInfoText({props}) {

  const { MAX, MIN, SKY, PTY } = props;

  return (
    <div className='block' key={Math.random()}>
      <span className='pr-1'>{SKY}</span>  
      <span className='pr-1'>{PTY}</span>
      <span className='pr-1'>{MAX}</span>   
      <span className='pr-1'>{MIN}</span>  
    </div>
  )
}
