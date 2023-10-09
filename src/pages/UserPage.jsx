import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserPage({setIsAuthenticated}) {        
    const navigate=useNavigate()
    function SignOut(e){
        e.preventDefault()

        setIsAuthenticated(false)
        navigate('/')

    }
  return (
    <div className='flex flex-col items-center bg-black text-white h-screen w-screen'><h1> Name: {JSON.parse(localStorage.getItem('name'))} </h1>  
    <h1>Email:  {JSON.parse(localStorage.getItem('email'))} </h1>
    <button onClick={SignOut}>Sign Out</button>
    </div>
  )
}
