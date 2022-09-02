import React, { useContext } from 'react';
import Loading from '../components/Loading';
import { WallContext } from '../context/WallProvider';

export default function Wall() {
  const { posts, loading } = useContext(WallContext);
  console.log('🚀 ~ file: Wall.jsx ~ line 6 ~ Wall ~ posts', posts)

  if (loading) return <Loading />;

  return (
    <main>
      <header>
        <h1>Wall</h1>
      </header>
      <section>
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
