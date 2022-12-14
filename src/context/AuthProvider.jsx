import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login, register } from '../services/api';

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
  const [registerMessage, setRegisterMessage] = useState('');
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
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (firstName, lastName, email, password) => {
    setLoading(true);
    try {
      const { data } = await register(firstName, lastName, email, password);
      setRegisterMessage(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken('');
    setRegisterMessage('');
    navigate('/');
  }, [navigate]);

  const contextValue = useMemo(() => ({
    handleLogin, handleRegister, handleLogout, user, token, registerMessage, loading,
  }), [user, loading, registerMessage]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
