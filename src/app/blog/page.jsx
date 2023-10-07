import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',
    { next: { revalidate: 3600 } }
  )
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.maincontainer}>
    {
      data.map((item) => (
        <Link key={item.id} href={`/blog/${item._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt=''
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.content}</p>
          </div>
        </Link>
      ))
    }        
    </div>
  )
}

export default Blog