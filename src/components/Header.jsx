import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(){
    return(
        <header className='flex flex-wrap items-center justify-between p-5 bg-black text-cyan-300 text-2xl'>
        <NavLink to='/' className='car-head'>#YourFourms</NavLink>
        <hr/>
        <div className="flex space-x-8">
        <NavLink to="/about" className={({isActive})=>isActive?" underline text-yellow-300": null}>About</NavLink>
        <hr/>
        <NavLink to= "/Login" className={({isActive})=>isActive?" underline text-yellow-300": null}>Login</NavLink>
        <hr/>
        <NavLink to="/Sign-up" className={({isActive})=>isActive?"underline text-yellow-300": null}>Sign up</NavLink>
        </div>
        </header>
    )
}