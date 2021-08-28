import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styles from '../styles/CreatePost.module.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const createPostClicked = async () => {
    setLoading(true);

    setLoading(false);
  };

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
      <button disabled={loading} className={styles.button} onClick={createPostClicked}>
        {loading ? 'Loading' : 'Create Post'}
      </button>
    </div>
  );
};

export default CreatePost;
