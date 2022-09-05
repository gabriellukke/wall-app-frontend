import React, { useContext, useEffect } from 'react';
import {
  Header,
  Loading,
  PostForm,
  PostCard,
} from '../components';
import { AuthContext } from '../context/AuthProvider';
import { WallContext } from '../context/WallProvider';

export default function Wall() {
  const { user } = useContext(AuthContext);
  const { handleFetchPosts, posts, loading } = useContext(WallContext);

  useEffect(() => {
    handleFetchPosts();
  }, [handleFetchPosts]);

  return (
    <main className="bg-ballblue min-h-screen flex flex-col items-center justify-start">
      <Header />
      { !user && <h2 className="text-2xl text-center my-10">Please sign in to post</h2> }
      { user && <PostForm /> }
      <section className="flex flex-col justify-center items-center w-5/6 min-w-fit min-h-fit h-full">
        { loading ? <Loading type="spinningBubbles" /> : posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
