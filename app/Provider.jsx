"use client"
import React, { useEffect } from 'react'
import Header from './components/Header'
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
        {/* <Header /> */}
<div>
          {children}
</div>
    </div>
  )
}

export default Provider
// "use client"
// import React, { useEffect } from 'react'
// import Header from './components/Header'
// import { useUser } from '@clerk/nextjs'
// import axios from 'axios'

// const Provider = ({children}) => {
//   const {user, isLoaded} = useUser();
  
//   useEffect(() => {
//     console.log('User loaded:', isLoaded);
//     console.log('User object:', user);
    
//     if (isLoaded && user) {
//       checkUserAuth();
//     }
//   }, [user, isLoaded])
  
//   // Save user data
//   const checkUserAuth = async() => {
//     try {
//       console.log('Starting checkUserAuth...');
//       console.log('User data:', {
//         fullName: user?.fullName,
//         email: user?.primaryEmailAddress?.emailAddress
//       });
      
//       // Save user to Database
//       const result = await axios.post('/api/users', {
//         userName: user?.fullName,
//         userEmail: user?.primaryEmailAddress?.emailAddress
//       });
      
//       console.log('API Response:', result.data);
//     } catch (error) {
//       console.error('Error in checkUserAuth:', error);
//       if (error.response) {
//         console.error('Response error:', error.response.data);
//         console.error('Status:', error.response.status);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error message:', error.message);
//       }
//     }
//   }
  
//   return (
//     <>
//       <Header />
//       {children}
//     </>
//   )
// }

// export default Provider

// "use client"
// import React, { useEffect } from 'react'
// import { useUser } from '@clerk/nextjs'
// import axios from 'axios'

// const Provider = ({children}) => {
//   console.log('🚀 Provider component rendered');
  
//   const {user, isLoaded, isSignedIn} = useUser();
  
//   console.log('👤 Clerk Status:', {
//     isLoaded,
//     isSignedIn,
//     hasUser: !!user,
//     userEmail: user?.primaryEmailAddress?.emailAddress,
//     userName: user?.fullName
//   });
  
//   useEffect(() => {
//     console.log('⚡ useEffect triggered');
    
//     if (isLoaded && user) {
//       console.log('✅ Conditions met, calling checkUserAuth');
//       checkUserAuth();
//     } else {
//       console.log('❌ Conditions not met:', {
//         isLoaded,
//         hasUser: !!user
//       });
//     }
//   }, [user, isLoaded])
  
//   const checkUserAuth = async() => {
//     console.log('🔥 checkUserAuth called');
    
//     try {
//       const payload = {
//         userName: user?.fullName,
//         userEmail: user?.primaryEmailAddress?.emailAddress
//       };
      
//       console.log('📦 Payload to send:', payload);
      
//       if (!payload.userEmail) {
//         console.error('❌ No email found!');
//         return;
//       }
      
//       console.log('📡 Making API request to /api/users');
      
//       const result = await axios.post('/api/users', payload);
      
//       console.log('✅ API Success:', result.data);
      
//     } catch (error) {
//       console.error('💥 Error in checkUserAuth:', error);
      
//       if (error.response) {
//         console.error('📛 Response error:', error.response.data);
//       }
//     }
//   }
  
//   return <>{children}</>
// }

// export default Provider