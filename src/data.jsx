import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import unfilled from "./unfilled_upvote.svg";
import filled from "./upvote_filled.svg";
import comms from "./pngegg.png"
import AddInitialData from './forumdata';
import data from './forumdata';

export default function Data({isAuthenticated}) {

  const [reversedForums, setReversedForums] = useState([]);
  const[coments, setComents]=useState([])

  useEffect(() => {
    const forumDataFromLocalStorage = localStorage.getItem('newData')?JSON.parse(localStorage.getItem('newData')):JSON.parse(localStorage.getItem('data')) || [];
    const forumsWithUpvote = forumDataFromLocalStorage.map(entry => ({
      ...entry,
      upvoted: false,
      comment:false
    }));
    setReversedForums(forumsWithUpvote.reverse());
  }, []);

  function handleUpvote(index) {
    const updatedForums = [...reversedForums];    
    updatedForums[index].upvoted = !updatedForums[index].upvoted;    
    setReversedForums(updatedForums);

  }
  function handleComments(index){
    const updatedForums = [...reversedForums];
    updatedForums[index].comment=!updatedForums[index].comment
    setReversedForums(updatedForums);

  }

  function handleSubmit(coments){
  }
  return (
    <div className='flex flex-col items-center bg-black'>     
    {isAuthenticated?<Link to="/forumpage" className='text-black p-3 rounded-xl bg-white absolute left-2 top-[7rem]'>Create Post</Link>:<h1 className='text-white absolute left-2 top-[7rem]'>Kindly Login Or Register to Create A Post!</h1>}
      {reversedForums.map((entry, index) => (
        <div key={index} className=' w-[50rem] bg-red my-5 px-20 py-10  bg-slate-800 flex flex-col inset-x-50 text-white'>
          <h1 className=' flex '> <h2 className='text-rgb(105,105,105) px-1'>Posted by </h2> {entry.username}</h1>
          {entry.upvoted ? (
            <img className='h-7 w-7 absolute inset-x-[24rem] ' onClick={() => handleUpvote(index)} src={filled} />
          ) : (
            <img className='h-7 w-7 absolute inset-x-[24rem] ' onClick={() => handleUpvote(index)} src={unfilled} />
          )}
          <Link to={`/${entry.id}`}><h1 className='text-4xl  text-yellow-400'>{entry.heading}</h1></Link>
          <p className='text-2xl p-5'>{entry.content}</p>
          <div className='flex'><img className='h-7 w-7  ' onClick={() => handleComments(index)} src={comms}/><h1>Comments</h1></div>
          {entry.comment ? (
  <div>
    {entry.comment ? (
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
) : (
  <p>No comments</p>
)}


  </div>
) : (
  <h1></h1>
)}
        </div>
      ))}

    </div>
  );
}

localStorage.setItem('data',JSON.stringify(data))