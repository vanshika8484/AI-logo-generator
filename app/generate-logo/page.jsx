"use client"
import { useState } from 'react';
import { UserDetailContext } from '@/context/UserDetailContext'
import React, { useContext, useEffect } from 'react'
import Prompt from '../_data/Prompt';

const GenerateLogo = () => {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const [formData,setFormData]=useState()
  useEffect(()=>{
    if(typeof window!=='undefined' && userDetail?.email){
      const storage=localStorage.getItem('formData');
      if(storage){
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage));
      }
    }
  },[userDetail])
  useEffect(()=>{
   if(formData?.title){
    GeneratedAILogo()
   }
  },[formData])
  const GeneratedAILogo=()=>{
    const PROMPT=Prompt.LOGO_PROMPT.replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
     .replace('{logoIdea}',formData.idea)
    .replace('{logoColor}',formData.palette)
    .replace('{logoDesign}',formData?.design?.title)
    .replace('{logoPrompt}',formData?.design?.prompt)
    console.log("prompt",PROMPT)
  }
  return (
    <>
     <div>Generate Logo</div>
    </>
  )
}

export default GenerateLogo
