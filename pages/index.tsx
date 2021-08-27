import type { NextPage } from 'next'
import Post from '../components/Post';

const Home: NextPage = () => {
  return (
    <div>
      <Post id={1} title="Hello Next.js" text="text" />
    </div>
  )
}

export default Home
