import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export default function Header() {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <header className="bg-white opacity-95 min-w-full flex justify-between h-20">
      <h1 className="text-3xl py-5 px-10">Wall</h1>
      <nav className="w-2/12 flex justify-between">
        {
          user ? (
            <div className="flex items-center">
              <button
                type="button"
                data-testid="logout"
                className="hover:bg-red-400 bg-transparen font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to="/"
                data-testid="sign-in"
                className="hover:bg-eletricblue bg-transparen font-semibold hover:text-white py-2 px-4 mx-1 border border-eletricblue hover:border-transparent rounded"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                data-testid="sign-up"
                className="hover:bg-green-600 bg-transparen font-semibold hover:text-white py-2 px-4 mx-1 border border-green-600 hover:border-transparent rounded"
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
