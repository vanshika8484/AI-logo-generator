"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useState } from 'react'
import Lookup from '../_data/Lookup';

const Hero = () => {
  const [logoTitle,setLogoTitle]=useState();
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
        <h1 className="text-primary text-6xl text-center font-bold">{Lookup.HeroHeading}</h1>
        <h2 className='text-5xl text-center font-bold w-5xl'>{Lookup.HeroDescription}</h2>
        <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>
        <div className='flex gap-6 w-full max-w-2xl mt-10'>
            <input placeholder='Enter your Logo Name' className='border p-3 rounded-md w-full shadow-md'
            onChange={(e)=>setLogoTitle(e?.target.value)}/>
       <Link href={`/create?title=${logoTitle}`}>
       <Button className="w-xs p-6 cursor-pointer">Get Started</Button>
       </Link>
        </div>
    </div>
  )
  
}

export default Hero