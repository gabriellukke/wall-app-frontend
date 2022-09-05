import React, { useState, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthProvider';
import verifyFields from '../utils/verifyFields';

import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const { handleLogin, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fieldsVerification = useMemo(() => {
    const blank = !email || !password;
    const passwordMinLength = 8;
    const emailRegex = /\S+@\S+\.\S+/;
    const emailValid = emailRegex.test(email);
    const passwordValid = password.length >= passwordMinLength;
    return {
      blank: !blank || 'Fields cannot be blank',
      emailValid: emailValid || 'Email is not valid',
      passwordValid: passwordValid || `Password must be at least ${passwordMinLength} characters`,
    };
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = verifyFields(fieldsVerification);
    if (error) {
      return toast.error(error);
    }
    return handleLogin(email, password);
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-stone-200 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white px-16 py-8 rounded-2xl shadow-lg">
        <h1 className="text-6xl mb-8 text-center">Wall App</h1>
        <fieldset className="left-text">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Login"
              value={email}
              data-testid="login-email"
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
              data-testid="login-password"
              onChange={({ target }) => setPassword(target.value)}
              className="w-full block bg-black rounded p-2 text-white"
            />
          </label>
        </fieldset>
        <button
          type="submit"
          data-testid="login-submit"
          className="bg-ballblue hover:bg-eletricblue p-3 w-full my-4 rounded-lg shadow"
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
