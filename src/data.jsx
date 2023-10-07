import React from 'react'
import { useEffect,useState } from 'react'
import data from "./forumdata"
import { Link } from 'react-router-dom'
import "./xD.png"
export default function Data() {
    const [allForums, setAllForums] = useState([]);

useEffect(() => {
  // Fetch forum data from local storage when the component mounts
  const forumDataFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
  setAllForums(forumDataFromLocalStorage);
}, []);
    return(  <div className='flex flex-col items-center bg-black' >
        {allForums.map((entry)=>{
            return( <div className=' min-h-[30rem] w-[50rem] bg-red my-5 px-20 py-10 rounded-3xl bg-slate-800 flex flex-col inset-x-50 text-cyan-500'>
                <h1 className='text-4xl py-6 text-yellow-400'>{entry.heading}</h1>
            <p className='text-2xl'>{entry.content}</p></div>)
        })}
                <Link to="/forumpage">Create </Link></div>
       ) 

    }


