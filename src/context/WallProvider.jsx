import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { getWallPosts, createPost } from '../services/api';

export const WallContext = createContext(null);

export default function WallProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getWallPosts();
      setPosts(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreatePost = async (title, content, authorId, token) => {
    await createPost({ title, content, authorId }, token);
    handleFetchPosts();
  };

  const contextValue = useMemo(() => ({
    handleFetchPosts, handleCreatePost, posts, loading,
  }), [posts, loading]);
  return (
    <WallContext.Provider value={contextValue}>{children}</WallContext.Provider>
  );
}

WallProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
