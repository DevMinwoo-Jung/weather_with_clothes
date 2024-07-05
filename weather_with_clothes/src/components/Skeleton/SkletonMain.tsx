import React from 'react'
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
      <div className='text-2xl leading-10'></div>
    </div>
    <div className='flex mt-8 h-52'>
      <div className='block w-1/2'>
      <LoadingSpinner/>
      </div>
      <div className='w-1/2'>
      </div>
    </div>
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-40 border-2'>
      <p className='mb-2'></p>
      <div className='border-t-2 mb-2'></div>
      <div className='flex overflow-x-scroll no-scrollbar whitespace-nowrap'>
      <LoadingSpinner/>
      </div>
    </div>
    <section className='mt-4 p-2 rounded-2xl	border-2'>
      <LoadingSpinner/>
    </section>
		<div className='h-34 mt-4 p-2 rounded-2xl border-2 flex'>
      <LoadingSpinner/>
		</div>
    </div>
  </div>
  )
}
