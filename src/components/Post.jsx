import React from 'react'
import { useParams } from "react-router-dom"

export default function Post() {
    const params=useParams()
    const id=localStorage.getItem('newData')?JSON.parse(localStorage.getItem('newData')):JSON.parse(localStorage.getItem('data'))
  return (
    <div className='flex flex-col items-center  bg-black h-[70rem] '>{id.map(entry => params.id==entry.id?<div  className=' w-[50rem] bg-red my-5 px-20 py-10  bg-slate-800 flex flex-col inset-x-50 text-white'>
        <h1>Posted by {entry.username}</h1>
        <h1 className='text-5xl  text-yellow-400'>{entry.heading}</h1>
          <p className='text-3xl p-5'>{entry.content}</p>
          <div>
    {entry.comments && entry.comments.user && entry.comments.sentence ? (
      entry.comments.user.map((user, commentIndex) => (
        <div key={commentIndex}>
          <p>{user}</p>
          <p className='pb-4'>{entry.comments.sentence[commentIndex]}</p>
        </div>
      ))
    ) : (
      <p>No comments</p>
    )}
  </div>
        </div>:null) }</div>
  )
}
