import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PostForm from '../components/PostForm';
import { WallContext } from '../context/WallProvider';

export default function Wall() {
  const { handleFetchPosts, posts, loading } = useContext(WallContext);

  useEffect(() => {
    handleFetchPosts();
  }, [handleFetchPosts]);

  if (loading) return <Loading />;

  return (
    <main className="bg-stone-200 min-h-screen flex flex-col items-center justify-center">
      <Header />
      <section className="bg-red-500 min-w-fit w-4/6">
        <PostForm />
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
