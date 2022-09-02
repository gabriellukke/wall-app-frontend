import React, {
  createContext, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../services/api';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storageUser = localStorage.getItem('user');
    return storageUser ? JSON.parse(storageUser) : null;
  });
  const [token, setToken] = useState(() => {
    const storageToken = localStorage.getItem('token');
    return storageToken || '';
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const { data: { token: apiToken, ...userInfo } } = await login(email, password);
      setToken(apiToken);
      setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo));
      localStorage.setItem('token', apiToken);
      navigate('/wall');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = useMemo(() => ({ handleLogin, loading }), [loading]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
