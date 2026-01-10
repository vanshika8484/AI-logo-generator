import React from 'react'
import Header from './components/Header'

const Provider = ({children}) => {
  //save user data
  const checkUserAuth=()=>{
    //save user to Database
  }
  return (
    <div>
        <Header />
<div>
          {children}
</div>
    </div>
  )
}

export default Provider