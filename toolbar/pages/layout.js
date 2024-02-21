import React from 'react'
import styles from '../styles/Layout.module.css'
import Link from 'next/link';

function Layout({children}) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login">Log out</Link>
        </li>
      </ul>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Layout
