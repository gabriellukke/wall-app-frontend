import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 28a2d1
// 009cd8

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-stone-200 min-h-screen flex items-center justify-center">
      <form className="bg-white px-32 py-16 rounded-2xl shadow-lg">
        <h1 className="text-6xl mb-8 text-center">Sign In</h1>
        <fieldset className="left-text">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Login"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="w-full block bg-black rounded p-2 mb-4 text-white"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="w-full block bg-black rounded p-2 text-white"
          />
        </fieldset>
        <button
          type="button"
          className="bg-green-400 p-3 w-full my-4 rounded-lg shadow"
        >
          Sign In
        </button>
        <div className="border border-stone-400 p-10">
          <p>
            New to Wall App?
            {' '}
            <Link to="/register" className="text-blue-600 underline">Create a Account</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
