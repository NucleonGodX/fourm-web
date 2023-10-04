import React from 'react'
import { useEffect,useState } from 'react'
import data from "./forumdata"


export default function Data() {
const [allForums, setAllForums]=React.useState(data)
    const [myData, setMyData]=React.useState([])

    const forumData=allForums

    return(  <>
        {forumData.map((entry)=>{
            return( <><h1>{entry.heading}</h1>
            <p>{entry.content}</p></>)
        })}</>
       ) 

    }


