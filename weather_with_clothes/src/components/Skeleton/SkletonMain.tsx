import React from 'react'
import Skeleton from './Skeleton'
import LoadingSpinner from './LoadingSpinner'
import { BsSearch } from 'react-icons/bs'
import Home from '../Icons/Home'

export default function SkletonMain() {
  return (
    <div className='min-w-screen min-h-screen bg-slate-500 text-white font-bold'>
    <div className='mobile:w-1/3 sm:w-2/3 m-auto p-4 max-w-xl relative'>
    <div className='right-2 absolute'>
      <div className='flex'> 
        <BsSearch className='absolute left-1 text-black top-1'/>
        <input 
          type="text" 
          value="" 
          placeholder="우리 동네 찾기" 
          className='pl-6 left-5 text-black font-light leading-1 rounded-md'
        />
      </div>
    </div>
    <div className='flex h-12'>
      <div className='cursor-pointer mr-6'><Home size="medium"/></div>
      <div className='text-2xl leading-10'>상봉동</div>
    </div>
    <div className='flex mt-8 h-48'>
      <div className='block w-1/2'>
        <p className='mt-4'><LoadingSpinner/>°</p>
        <p className='text-5xl'><LoadingSpinner/>°</p>
        <p className='mt-8'><LoadingSpinner/>° / <LoadingSpinner/>°</p>
      </div>
      <div className='w-1/2'>
        <p>오늘은 외투챙겨요</p>
        <p>비와요 우산챙겨요</p>
      </div>
    </div>
    <section className='mt-4 p-2 rounded-2xl	border-2'>Summary</section>
		<div className='mt-4 p-2 rounded-2xl border-2 flex'>
      <LoadingSpinner/>
		</div>
    </div>
  </div>
  )
}
