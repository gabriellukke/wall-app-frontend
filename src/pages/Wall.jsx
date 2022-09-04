import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import PostForm from '../components/PostForm';
import { WallContext } from '../context/WallProvider';

export default function Wall() {
  const { posts, loading } = useContext(WallContext);

  if (loading) return <Loading />;

  return (
    <main className="bg-stone-200 min-h-screen flex items-center justify-center">
      <header>
        <h1>Wall</h1>
        <p>Sign in for post messages in the wall</p>
        <Link to="/">Sign in</Link>
        <Link to="/register">Sign up</Link>
      </header>
      <section className="flex-col bg-red-500 min-w-fit w-4/6">
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
