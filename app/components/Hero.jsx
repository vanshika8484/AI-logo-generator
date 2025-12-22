import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
        <h1 className="text-primary text-6xl text-center font-bold">AI Logo Maker</h1>
        <h2 className='text-5xl text-center font-bold w-5xl'>Perfect Logos for Apps, Businesses and Websites</h2>
        <p className='text-lg text-gray-500 text-center'>Craft unique and professional logos effortlessly with our AI-powered tool.Perfect for apps, businesses, websites and more!</p>
        <div className='flex gap-6 w-full max-w-2xl mt-10'>
            <input placeholder='Enter your Logo Name' className='border p-3 rounded-md w-full shadow-md'/>
       <Button className="w-xs p-6">Get Started</Button>
        </div>
    </div>
  )
  
}

export default Hero