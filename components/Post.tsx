/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TrashPng from '../public/trash.png';
import EditPng from '../public/edit.png';

interface PostsProps {
  title: string;
  text: string;
}

const Post: React.FC<PostsProps> = ({ title, text }) => {
  return (
    <div className="Post">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div className="buttons">
        <button>
          <img src='./edit.png' alt="Edit" />
        </button>
        <button>
          <img src='./trash.png' alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default Post;
