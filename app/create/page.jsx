"use client"
import React, {  useState } from 'react'
import LogoTitle from './components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './components/LogoDesc'
import LogoColorPalette from './components/LogoColorPalette'
import LogoDesigns from './components/LogoDesigns'
import LogoIdea from './components/LogoIdea'

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
            <LogoTitle onHandleInputChange={(value)=>onHandleInputChange('title',value)}/>:
            step==2?
            <LogoDesc onHandleInputChange={(value)=>onHandleInputChange('desc',value)}/>:
            step==3?
            <LogoColorPalette onHandleInputChange={(value)=>onHandleInputChange('palette',value)}/>:
            step==4?
            <LogoDesigns onHandleInputChange={(value)=>onHandleInputChange('design',value)}/>:
            step==5?
            <LogoIdea onHandleInputChange={(value)=>onHandleInputChange('idea',value)}/>:
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