import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import LoggedHeader from "./LoggedHeader";
export default function Layout(){
    return(<>
    
    <LoggedHeader />
    <main>
    <Outlet/></main>
</>)
}