import React from 'react'
import { useEffect,useState } from 'react'
import dataFromLocalStorage from "./forumdata"
import { Link } from 'react-router-dom'

export default function Data() {
const [allForums, setAllForums]=React.useState(dataFromLocalStorage)

    const forumData=allForums

    return(  <div className='flex flex-col items-center'>
        {dataFromLocalStorage.map((entry)=>{
            return( <div className=' min-h-[30rem] w-[50rem] bg-red my-20 px-20 py-10 rounded-3xl bg-black flex flex-col inset-x-50 text-cyan-500'>
                <h1 className='text-4xl py-6 text-yellow-400'>{entry.heading}</h1>
            <p className='text-2xl'>{entry.content}</p></div>)
        })}
                <Link to="/forumpage">Create </Link></div>
       ) 

    }


