import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useUpdatePostMutation } from '../src/generated/graphql';
import styles from '../styles/UpdatePost.module.css';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const postId = router.query.id;
  const [, updatePost] = useUpdatePostMutation()

  const updatePostClicked = async () => {
    setLoading(true);
    await updatePost({
      id: +postId!,
      text,
      title
    })
    setLoading(false);
    router.push('/');
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
      <button disabled={loading} className={styles.button} onClick={updatePostClicked}>
      {loading ? 'Loading' : 'Update Post'}
      </button>
    </div>
  );
};

export default UpdatePost;
