import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import unfilled from "./unfilled_upvote.svg";
import filled from "./upvote_filled.svg";

export default function Data() {
  const [allForums, setAllForums] = useState([]);

  useEffect(() => {
    const forumDataFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
    const forumsWithUpvote = forumDataFromLocalStorage.map(entry => ({
      ...entry,
      upvoted: false,
    }));
    setAllForums(forumsWithUpvote);
  }, []);

  function handleUpvote(index) {
    const updatedForums = [...allForums];
    updatedForums[index].upvoted = !updatedForums[index].upvoted;
    setAllForums(updatedForums);
  }

  return (
    <div className='flex flex-col items-center bg-black'>
      {allForums.map((entry, index) => (
        <div key={index} className='min-h-[30rem] w-[50rem] bg-red my-5 px-20 py-10 rounded-3xl bg-slate-800 flex flex-col inset-x-50 text-cyan-500'>
          {entry.upvoted ? (
            <img className='h-7 w-7 absolute inset-x-[23rem] ' onClick={() => handleUpvote(index)} src={filled} />
          ) : (
            <img className='h-7 w-7 absolute inset-x-[23rem] ' onClick={() => handleUpvote(index)} src={unfilled} />
          )}
          <h1 className='text-4xl py-6 text-yellow-400'>{entry.heading}</h1>
          <p className='text-2xl'>{entry.content}</p>
        </div>
      ))}
      <Link to="/forumpage">Create</Link>
    </div>
  );
}

