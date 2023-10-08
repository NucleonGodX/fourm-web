import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import unfilled from "./unfilled_upvote.svg";
import filled from "./upvote_filled.svg";

export default function Data() {
  const [reversedForums, setReversedForums] = useState([]);

  useEffect(() => {
    const forumDataFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
    const forumsWithUpvote = forumDataFromLocalStorage.map(entry => ({
      ...entry,
      upvoted: false,
    }));
    // Reverse the order of forum posts and store them in reversedForums
    setReversedForums(forumsWithUpvote.reverse());
  }, []);

  function handleUpvote(index) {
    const updatedForums = [...reversedForums];
    updatedForums[index].upvoted = !updatedForums[index].upvoted;
    setReversedForums(updatedForums);
  }

  return (
    <div className='flex flex-col items-center bg-black'>     
    <Link to="/forumpage" className='text-black p-3 rounded-xl bg-white '>Create Post</Link>
      {reversedForums.map((entry, index) => (
        <div key={index} className='min-h-[30rem] w-[50rem] bg-red my-5 px-20 py-10  bg-slate-800 flex flex-col inset-x-50 text-white'>
          <h1 className=' flex '> <h2 className='text-rgb(105,105,105) px-1'>Posted by </h2> {entry.username}</h1>
          {entry.upvoted ? (
            <img className='h-7 w-7 absolute inset-x-[24rem] ' onClick={() => handleUpvote(index)} src={filled} />
          ) : (
            <img className='h-7 w-7 absolute inset-x-[24rem] ' onClick={() => handleUpvote(index)} src={unfilled} />
          )}
          <h1 className='text-4xl  text-yellow-400'>{entry.heading}</h1>
          <p className='text-2xl p-5'>{entry.content}</p>
        </div>
      ))}

    </div>
  );
}
