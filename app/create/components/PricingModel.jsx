import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const PricingModel = ({onHandleInputChange,formData}) => {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
        />
       <div  className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
         {Lookup.pricingOption.map((pricing, index) => (
        <div key={index} className='flex items-center flex-col p-5 border shadow-sm rounded-lg'>
            <Image src={pricing.icon} alt={pricing.title}
            width={60}
            height={60} />
            <h2 className='text-2xl font-medium'>{pricing.title}</h2>
            <div>
                {pricing.features.map((feature,index)=>(
                    <h2 key={index} className='text-lg mt-3'>{feature}</h2>
                ))}
                </div>
                <Button className='mt-5'>{pricing.button}</Button>
        </div>
      ))}
       </div>
    </div>
  )
}

export default PricingModel