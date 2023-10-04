import React from 'react'
import { useEffect,useState } from 'react'
import forumdata from './forumdata'


export default function Data() {
const [allForums, setAllForums]=React.useState(forumdata)
    const [myData, setMyData]=React.useState([])

    const forumData=allForums.data

    return(  <>
        {forumData.map((entry)=>{
            return( <><h1>{entry.heading}</h1>
            <p>{entry.content}</p></>)
        })}</>
       ) 

    }


