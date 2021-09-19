import React from 'react';
import type { NextPage } from 'next';
import { usePostsQuery } from '../src/generated/graphql';
import Post from '../components/Post';

const Home: NextPage = () => {
  const [{ data, error }] = usePostsQuery({
    variables: {
      limit: 10,
    },
  });
  return (
    <div>
      {data?.posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} text={post.text} />
      ))}
    </div>
  );
};

export default Home;
