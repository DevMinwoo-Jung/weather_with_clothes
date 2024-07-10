import React from 'react'
import Home from '../Icons/Home'
import { Skeleton } from '@mui/material'
import { BsSearch } from 'react-icons/bs'

export default function SkletonMain() {
  return (
    <div className='min-w-screen min-h-screen bg-slate-500 text-white font-bold'>
    <div className='mobile:w-1/3 sm:w-2/3 m-auto p-4 max-w-xl relative'>
    <div className='right-2 absolute'>
        <div className='flex'> 
          <BsSearch className='absolute left-1 text-black top-1'/>
          <input 
            type="text" 
            placeholder="우리 동네 찾기" 
            className='pl-6 left-5 text-black font-light leading-1 rounded-md'
          />
        </div>
    </div>
    <div className='flex h-12'>
      <div className='cursor-pointer mr-6 flex'><Home size="medium"/></div>
      <div className='text-2xl'><Skeleton animation="wave" variant="rectangular" width={80} height={40}/></div>
    </div>
    <div className='flex mt-8 min-h-48'>
      <div className='block w-1/2'>
        <Skeleton animation="wave" variant="rectangular" width={120} height={120}/>
      </div>
      <div className='w-1/2'>
        <Skeleton animation="wave" variant="rectangular" width='full' height={20} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={20}/>
      </div>
    </div>
    <div className='pt-2 pb-2 pl-6 pr-6 rounded-2xl h-52 border-2'>
        <p className='mb-2'></p>
        <Skeleton animation="wave" variant="rectangular" width='full' height={12} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={12} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={12} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={12} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={12} className='mt-14'/>
    </div>
    <section className='mt-4 p-2 rounded-2xl min-h-56	border-2'>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mt-3 mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mb-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mt-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mt-3'/>
        <Skeleton animation="wave" variant="rectangular" width='full' height={15} className='mt-3'/>
    </section>
		<div className='h-34 mt-4 p-2 rounded-2xl min-h-64 border-2 flex'>
        <Skeleton animation="wave" variant="rounded" width={600} height={300} className='mt-2'/>
		</div>
    </div>
  </div>
  )
}
