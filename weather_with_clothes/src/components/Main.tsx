import React from 'react'

export default function Main() {
  return (
    <section className='flex mt-8'>
      <div className='block w-1/2'>
        <p className='text-5xl'>19°</p>
        <p className='mt-4'>구름 많음</p>
        <p className='mt-8'>20 / 13 체감온도 19</p>
      </div>
      <div className='w-1/2'>
        <p>오늘은 외투챙겨요</p>
        <p>비와요 우산챙겨요</p>
      </div>
    </section>
  )
}
