import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthProvider';

export default function Register() {
  const { handleRegister, registerMessage, loading } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(firstName, lastName, email, password);
  };

  if (loading) return <Loading />;

  if (registerMessage) {
    return (
      <div className="bg-stone-200 min-h-screen flex flex-col text-2xl items-center justify-center">
        <p>{registerMessage}</p>
        <p>We&apos;ve sent a email to you, check your mailbox</p>
        <p>
          Go to
          {' '}
          <Link to="/" className="text-blue-600 underline">Home page to Sign In</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-stone-200 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white px-16 py-8 rounded-2xl shadow-lg">
        <h1 className="text-6xl mb-8 text-center">Wall App</h1>
        <fieldset className="left-text">
          <label htmlFor="firstName">
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              data-testid="register-firstName"
              onChange={({ target }) => setFirstName(target.value)}
              className="w-full block bg-black rounded p-2 mb-4 text-white"
            />
          </label>
          <label htmlFor="lastName">
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              data-testid="register-lastName"
              onChange={({ target }) => setLastName(target.value)}
              className="w-full block bg-black rounded p-2 mb-4 text-white"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              data-testid="register-email"
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
              data-testid="register-password"
              onChange={({ target }) => setPassword(target.value)}
              className="w-full block bg-black rounded p-2 text-white"
            />
          </label>
        </fieldset>
        <button
          type="submit"
          data-testid="login-submit"
          className="bg-green-500 hover:bg-green-400 p-3 w-full my-4 rounded-lg shadow"
        >
          Sign Up
        </button>
        <div className="border border-stone-400 p-10 text-center">
          <p>
            Don`t want to sign up?
            {' '}
            <Link to="/wall" className="text-blue-600 underline">Enter as a guest</Link>
          </p>
        </div>
      </form>
    </div>
  );
}