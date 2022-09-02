import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

// 28a2d1
// 009cd8

export default function Login() {
  const { handleLogin, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="bg-stone-200 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white px-16 py-8 rounded-2xl shadow-lg">
        <h1 className="text-6xl mb-8 text-center">Sign In</h1>
        <fieldset className="left-text">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Login"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className="w-full block bg-black rounded p-2 mb-4 text-white"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="w-full block bg-black rounded p-2 text-white"
            />
          </label>
        </fieldset>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 p-3 w-full my-4 rounded-lg shadow"
        >
          Sign In
        </button>
        <div className="border border-stone-400 p-10 text-center">
          <p>
            New to Wall App?
            {' '}
            <Link to="/register" className="text-blue-600 underline">Create an Account</Link>
          </p>
          <p>
            or
            {' '}
            <Link to="/wall" className="text-blue-600 underline">enter as a guest</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
