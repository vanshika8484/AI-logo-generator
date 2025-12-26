"use client"
import React, {  useState } from 'react'
import LogoTitle from './components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './components/LogoDesc'
import LogoColorPalette from './components/LogoColorPalette'
import LogoDesigns from './components/LogoDesigns'
import LogoIdea from './components/LogoIdea'
import PricingModel from './components/PricingModel'

const page = () => {
    const [step, setStep] = useState(1);
    const [formData,setFormData] = useState();
const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

    console.log("Current formData:", formData);
 
  return (
    <div className='mt-28 border p-10 rounded-xl max-w-7xl mx-auto '>
        {
            step==1?
            <LogoTitle onHandleInputChange={(value)=>onHandleInputChange('title',value)}
            formData={formData}
            />:
            step==2?
            <LogoDesc onHandleInputChange={(value)=>onHandleInputChange('desc',value)}
             formData={formData}/>:
            step==3?
            <LogoColorPalette onHandleInputChange={(value)=>onHandleInputChange('palette',value)}
             formData={formData}/>:
            step==4?
            <LogoDesigns onHandleInputChange={(value)=>onHandleInputChange('design',value)}
             formData={formData}/>:
            step==5?
            <LogoIdea onHandleInputChange={(value)=>onHandleInputChange('idea',value)}
             formData={formData}/>:
             step==6?
            <PricingModel onHandleInputChange={(value)=>onHandleInputChange('pricing',value)}
             formData={formData}/>:
             null
        }
        <div className='flex items-center justify-between'>
            {step!=1&&<Button variant='outline'onClick={()=>setStep(step-1)} className='cursor-pointer'><ArrowLeft />Previous</Button>}
            <Button onClick={()=>setStep(step+1)} className='cursor-pointer'><ArrowRight />Continue</Button>
        </div>
    </div>
  )
}

export default page