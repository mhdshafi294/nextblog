"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css";
import { links } from '@/constants/constants'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Lamamia</Link>
      <div className={styles.links}>
        {links.map(link => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={()=> console.log('logged out')}>logout</button>
      </div>
    </div>
  )
}

export default Navbar