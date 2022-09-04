import React, { useContext, useEffect } from 'react';
import {
  Header,
  Loading,
  PostForm,
  PostCard,
} from '../components';
import { WallContext } from '../context/WallProvider';

export default function Wall() {
  const { handleFetchPosts, posts, loading } = useContext(WallContext);

  useEffect(() => {
    handleFetchPosts();
  }, [handleFetchPosts]);

  return (
    <main className="bg-stone-200 min-h-screen flex flex-col items-center justify-start">
      <Header />
      <PostForm />
      <section className="min-h-fit h-full">
        { loading ? <Loading type="spinningBubbles" /> : posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
