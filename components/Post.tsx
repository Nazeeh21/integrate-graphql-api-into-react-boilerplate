/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TrashPng from '../public/trash.png';
import EditPng from '../public/edit.png';
import { useRouter } from 'next/dist/client/router';

interface PostsProps {
  id: number;
  title: string;
  text: string;
}

const Post: React.FC<PostsProps> = ({ id, title, text }) => {
  const router = useRouter()

  return (
    <div className="Post">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div className="buttons">
        <button onClick={() => {
          router.push(`/update-post/${id}`)
        }}>
          <img src='./edit.png' alt="Edit" />
        </button>
        <button onClick={() => {}}>
          <img src='./trash.png' alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default Post;
