import React from 'react'
import { useParams } from "react-router-dom"

export default function Post() {
    const params=useParams()
    const id=localStorage.getItem('newData')?JSON.parse(localStorage.getItem('newData')):JSON.parse(localStorage.getItem('data'))
  return (
    <div className='flex flex-col'>{id.map(entry => params.id==entry.id?<div>
        <h1>{entry.username}</h1>
        <h1 className='text-4xl  text-yellow-400'>{entry.heading}</h1>
          <p className='text-2xl p-5'>{entry.content}</p>
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
