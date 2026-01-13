"use client"
import { UserDetailContext } from '@/context/UserDetailContext'
import React, { useContext } from 'react'

const GenerateLogo = () => {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  return (
    <>
 
    <div>Generate Logo</div>
    </>
  )
}

export default GenerateLogo