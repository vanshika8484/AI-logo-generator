"use client"
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
const Provider = ({children}) => {
  const {user}=useUser();
  useEffect(()=>{
    user&&checkUserAuth();
  },[user])
  //save user data
  const checkUserAuth=async()=>{
    //save user to Database
    const result=await axios.post('/api/users',{
      userName:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress
    })
    console.log(result.data);
  }
  return (
    <div>
        
<div>
          {children}
</div>
    </div>
  )
}

export default Provider
