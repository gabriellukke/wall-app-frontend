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
    setTitle('');
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-5/6 py-5 my-5"
    >
      <fieldset className="flex flex-col w-4/5 h-2/3 justify-evenly border border-eletricblue shadow p-5 max-w-lg">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            className="no-resize appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </label>
        <div className="flex justify-end pr-2 pb-2">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 disabled:bg-red-400 text-white p-1 w-1/4 rounded-lg shadow"
            disabled={!title || !message}
          >
            Send
          </button>
        </div>
      </fieldset>
    </form>
  );
}
