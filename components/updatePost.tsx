import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styles from '../styles/UpdatePost.module.css';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const router = useRouter();
  const postId = router.query.id;

  const updatePostClicked = async () => {};

  return (
    <div className={styles.postForm}>
      <div className={styles.input}>
        <div>Title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.input}>
        <div>Text</div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button className={styles.button} onClick={updatePostClicked}>
        Update Post
      </button>
    </div>
  );
};

export default UpdatePost;
