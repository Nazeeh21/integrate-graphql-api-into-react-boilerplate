import React, { useState } from 'react';
import { useUpdatePostMutation } from '../generated/graphql';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [, updatePost] = useUpdatePostMutation()

  const updatePostClicked = async () => {
    const {error} = await updatePost({
      id: 1,
      title,
      text
    })

    if(!error) {

    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '2rem' }}>
        <div style={{ fontSize:'1.5rem', fontWeight: 'bold', marginRight: '1rem'}}>Title</div>
        <input style={{ borderRadius: '0.3rem', padding: '0.5rem' }} value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '2rem' }}>
        <div style={{ fontSize:'1.5rem', fontWeight: 'bold', marginRight: '1rem'}}>Text</div>
        <input style={{ borderRadius: '0.3rem', padding: '0.5rem' }} value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={updatePostClicked} style={{ padding: '0.3rem', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Create Post</button>
    </div>
  );
};

export default UpdatePost;
