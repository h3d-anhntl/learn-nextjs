import React from 'react'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' }
  )
 
  if (!res.ok) {
    return notFound();
  }
 
  return res.json()
}

export async function generateMetadata({params}) {

  const post = await getData(params.id)

  return {
    title: post.title,
    description: post.desc
  }
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  console.log(data)
  return (
    <div>
      {
        data && data.title
      }
    </div>
  )
}

export default BlogPost