import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const router = useRouter()
  const postId = router.query.id;

  const updatePostClicked = async () => {
    
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
      <button onClick={updatePostClicked} style={{ padding: '0.3rem', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Update Post</button>
    </div>
  );
};

export default UpdatePost;
