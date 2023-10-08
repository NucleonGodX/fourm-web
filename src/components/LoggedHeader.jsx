import React from "react";
import { NavLink } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";

export default function LoggedHeader(){

    return(
        <header className='flex flex-wrap items-center justify-between p-5 bg-slate-900 text-white text-2xl'>
        <NavLink to='/' className='car-head'>#YourFourms</NavLink>
        <hr/>
        <div className="flex space-x-8">
        <NavLink to="/about" className={({isActive})=>isActive?" underline text-yellow-300": null}>About</NavLink>
        <hr/>
        <NavLink to="/contact-us" className={({isActive})=>isActive?" underline text-yellow-300": null}></NavLink>

        </div>
        </header>
    )
}