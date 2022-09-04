import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { WallContext } from '../context/WallProvider';

export default function PostForm() {
  const { handleCreatePost } = useContext(WallContext);
  const { user, token } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreatePost(title, message, user.userId, token);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-200 flex flex-col items-center justify-center h-64"
    >
      <fieldset className="flex flex-col w-2/5 h-2/3 justify-evenly bg-green-200">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="3"
            placeholder="Post"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </label>
        <div className="flex justify-end pr-2 pb-2">
          <button type="submit" className="bg-green-500 hover:bg-green-400 p-1 w-1/4 rounded-lg shadow">Post</button>
        </div>
      </fieldset>
    </form>
  );
}
