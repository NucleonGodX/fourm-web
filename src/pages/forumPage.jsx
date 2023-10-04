import React, { useState } from 'react';
import data from '../forumdata';

export default function ForumPage() {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { heading, content };
    data.push(newPost);
    setHeading('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Your Forum</h1>
      <h2>Title</h2>
      <input
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <h2>Content</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}