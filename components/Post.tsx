/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDeletePostMutation } from '../src/generated/graphql';

interface PostsProps {
  id: number;
  title: string;
  text: string;
}

const Post: React.FC<PostsProps> = ({ id, title, text }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [, deletePost] = useDeletePostMutation();

  const onDeletePost = async () => {
    setLoading(true);
    await deletePost({ id });
    router.reload()
    setLoading(false);
  };

  return (
    <div className='Post'>
      <div>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
      <div className='buttons'>
        <button
          onClick={() => {
            router.push(`/update-post/${id}`);
          }}
        >
          <img src='./edit.png' alt='Edit' />
        </button>
        <button disabled={loading} onClick={onDeletePost}>
          <img
            style={{ cursor: `${loading ? 'not-allowed' : 'pointer'}` }}
            src='./trash.png'
            alt='Delete'
          />
        </button>
      </div>
    </div>
  );
};

export default Post;
