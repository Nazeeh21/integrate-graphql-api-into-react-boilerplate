/* eslint-disable @next/next/link-passhref */
import '../styles/globals.css';
import '../styles/Post.css';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import styles from '../styles/Navbar.module.css';
import { Provider } from 'urql';
import { createUrqlClient } from '../createUrqlClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={createUrqlClient}>
      <Layout>
        <div className={styles.navbar}>
          <Link href='/'>
            <h1 className={styles.logo}>Posts</h1>
          </Link>

          <Link href='/createPost'>
            <button className={styles.button}>Create Post</button>
          </Link>
        </div>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
