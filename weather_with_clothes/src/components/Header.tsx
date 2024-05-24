import React, { useState } from 'react'
import Home from './Icons/Home'
import { HiOutlineOfficeBuilding } from 'react-icons/hi';


export default function Header({dong}) {

  const [region, setRegion] = useState('HOME');

  const toggleRegion = () => {
    if(region === 'HOME') {
      setRegion('Office')
    } else {
      setRegion('HOME')
    }
  }

  return (
    <div className='flex h-12'>
      <div className='cursor-pointer mr-6' onClick={toggleRegion}>{region === 'HOME' ? <Home size="medium"/> : <HiOutlineOfficeBuilding size="medium"/>}</div>
      <div className='text-2xl leading-10'>{dong}</div>
    </div>
  )
}
