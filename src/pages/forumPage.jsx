import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumPage() {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem('name')));
  const [forumData, setForumData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    // Check if forum data is already present in local storage
    const localData = JSON.parse(localStorage.getItem('data'));
    if (localData) {
      setForumData(localData);
    } else {
      // Initialize with default data if local storage is empty
      const defaultData = [
        // Your default forum data here
      ];
      setForumData(defaultData);
      localStorage.setItem('data', JSON.stringify(defaultData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { heading, content, username };
    const updatedData = [...forumData, newPost];

    // Update both the state and local storage
    setForumData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));

    setHeading('');
    setContent('');
    navigate('/')
  };

  return (
    <form className="flex flex-col items-center bg-slate-800 text-white space-y-6" onSubmit={handleSubmit}>
      <h1 className='text-xl'>Create Your Post</h1>
      <h2>Title</h2>
      <input 
        className='text-black w-[20rem] h-[5rem] rounded-3xl'
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <h2>Content</h2>
      <textarea
        className='w-[50rem] h-[35rem] rounded-3xl text-black'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className='bg-slate-500 p-5 rounded-xl'>Submit</button>
    </form>
  );
}