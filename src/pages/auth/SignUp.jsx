import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, json } from 'react-router-dom'
import auth from '../../firebase'
import "../../index.css"
import { sendEmailVerification } from 'firebase/auth'

export default function SignUp() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [name, setName]=useState("")
  localStorage.removeItem('name')
  localStorage.setItem('name',JSON.stringify(name))
function signUp(e){
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password, name)
  .then((userCredential)=>{
    window.location = "/";

  })
  .catch((error)=>
  console.log(error))
  .then(() => {
    console.log("email verification sent")
  })

}



  return(<div className='sign-up'>
    <div className='sign-up-container'>
      <form  className='container-items'onSubmit={signUp}>        
        <h1 className='account-head'>Create An Account </h1>
        <input className='name' placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input className='email' type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className='pass' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='log-button' type='submit' > Create Account </button>
    <p className='already-account'>Already have an account?  <Link to="/sign-in" className='already-button'>Sign In</Link></p>
      </form> 
    </div>
    <div className='left-top'></div>
    <div className='right-top'></div>
    </div>
    
  )

}
