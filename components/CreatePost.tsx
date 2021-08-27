import React, { useState } from 'react';
import { useCreatePostMutation } from '../generated/graphql';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [, createPost] = useCreatePostMutation()

  const createPostClicked = async () => {
    const {error} = await createPost({
      input: {
        title,
        text
      }
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
      <button onClick={createPostClicked} style={{ padding: '0.3rem', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Create Post</button>
    </div>
  );
};

export default CreatePost;
