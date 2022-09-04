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
      className="bg-blue-200 flex-col items-center justify-center"
    >
      <fieldset>
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
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </label>
      </fieldset>
      <button type="submit" className="bg-green-500 hover:bg-green-400 p-3 w-full my-4 rounded-lg shadow">Post</button>
    </form>
  );
}
