import React, { useState } from 'react';
import data from '../forumdata';
import {useNavigate} from 'react-router-dom';

export default function ForumPage() {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const[username, setUsername]=useState(JSON.parse(localStorage.getItem('name')))
    const navigate=useNavigate()

 
  const handleSubmit = (e) => {
    e.preventDefault();    

    const newPost = { heading, content, username };
    const existingData = JSON.parse(localStorage.getItem('data')) || [];
    existingData.push(newPost);
    localStorage.removeItem('data')

    localStorage.setItem('data', JSON.stringify(existingData));

    setHeading('');
    setContent('');
    navigate('/')
  };

  return (
    <form className="flex flex-col items-center bg-slate-800 text-white space-y-6" onSubmit={handleSubmit}>
      <h1 className='text-xl'>Create Your Post</h1>
      <h2>Title</h2>
      <input 
      className='text-black w-[20rem]  h-[5rem] rounded-3xl'
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <h2>Content</h2>
      <textarea
      className='w-[50rem]  h-[35rem] rounded-3xl text-black'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className='bg-slate-500 p-5 rounded-xl'>Submit</button>
    </form>
  ) }