import React from 'react'
import Home from './Icons/Home'

export default function Header() {
  return (
    <div className='flex h-12'>
      <div className='mr-6'><Home size="medium"/></div>
      <div className='text-2xl leading-10'>상봉동</div>
    </div>
  )
}
