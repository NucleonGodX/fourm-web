import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(){
    return(
        <header className='headmust'>
        <NavLink to='/' className='car-head'>#YourFourms</NavLink>
        <hr/>
        <NavLink to="/about" className={({isActive})=>isActive?"background-black": null}>About</NavLink>
        <hr/>
        <NavLink to= "/Login" className={({isActive})=>isActive?"background-black": null}>Login</NavLink>
        <hr/>
        <NavLink to="/Sign-up" className={({isActive})=>isActive?"background-black": null}>Sign up</NavLink>
    
        </header>
    )
}