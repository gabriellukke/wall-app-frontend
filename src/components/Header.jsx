import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export default function Header() {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <header className="bg-blue-500 min-w-full flex justify-between h-20">
      <h1 className="text-3xl py-5 px-10">Wall</h1>
      <nav className="w-2/12 flex justify-between">
        {
          user ? (
            <div className="flex items-center">
              <button
                type="button"
                className="border-black hover:bg-red-400 border-2 rounded-lg px-5 my-5"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to="/"
                className=" border-2 border-black hover:bg-slate-400 rounded-lg px-5 mx-2"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className=" border-2 border-black hover:bg-slate-400 rounded-lg px-5 mx-2"
              >
                Sign up
              </Link>
            </div>
          )
        }
      </nav>
    </header>
  );
}
