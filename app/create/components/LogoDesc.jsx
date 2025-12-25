"use client"
import Lookup from '@/app/_data/Lookup';
import HeadingDescription from './HeadingDescription'
import React from 'react'

const LogoDesc = ({onHandleInputChange,formData}) => {
   return (
     <div className='my-10'>
         <HeadingDescription title={Lookup.LogoDescTitle} description={Lookup.LogoDescDesc} />
         <input type="text"
          placeholder='Enter your Logo Name'
          className='p-4 border rounded-lg mt-5 w-full'
          //  defaultValue={formData.desc}
           value={formData.desc}
          onChange={(e)=>onHandleInputChange(e.target.value)} />
     </div>
   )
}

export default LogoDesc