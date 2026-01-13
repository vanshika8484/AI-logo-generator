"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { UserDetailContext } from '@/context/UserDetailContext'
const Provider = ({children}) => {
  const {user}=useUser();
  const [userDetail, setUserDetail] = useState()
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
    setUserDetail(result.data);
  }
  return (
    <div>
       <UserDetailContext.Provider value={{userDetail,setUserDetail}} >
<div>
          {children}
</div>
       </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
