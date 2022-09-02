import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { getWallPosts } from '../services/api';

export const WallContext = createContext(null);

export default function WallProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data } = await getWallPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const contextValue = useMemo(() => ({ posts, loading }), [posts, loading]);
  return (
    <WallContext.Provider value={contextValue}>{children}</WallContext.Provider>
  );
}

WallProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
