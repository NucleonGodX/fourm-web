import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase'
import { Link } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'

export default function SignIn() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

function signIn(e){
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential)=>{
    console.log(userCredential)
  })
  .catch((error)=>
  console.log(error))
}

function resetPass(){
  sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("email sent")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  return(
<div className='sign-up'>
    <div className='sign-up-container'>
      <form onSubmit={signIn} className='container-items'>
        
        <h1 className='account-head'>Login </h1>
        <input className='email' type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className='pass' type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Link to="/" ><button className='log-button' type='submit'>Sign In</button></Link>
        
      </form> 
      <p className='already-account'>Can't login in?  <button type='submit' className='already-button' onClick={resetPass}>Reset Password</button></p>
    </div>
    <div className='left-top'></div>
    <div className='right-top'></div>
    </div>
  )

}

