import React from 'react'
import { useEffect,useState } from 'react'
import dataFromLocalStorage from "./forumdata"
import { Link } from 'react-router-dom'

export default function Data() {
const [allForums, setAllForums]=React.useState(dataFromLocalStorage)
    const [myData, setMyData]=React.useState([])

    const forumData=allForums

    return(  <>
        {dataFromLocalStorage.map((entry)=>{
            return( <><h1>{entry.heading}</h1>
            <p>{entry.content}</p></>)
        })}
                <Link to="/forumpage">Create </Link></>
       ) 

    }


