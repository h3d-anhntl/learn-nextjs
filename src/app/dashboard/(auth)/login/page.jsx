'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'

const Login = () => {
  const session = useSession()
  const router = useRouter()

  if(session.status === "loading") {
    return <p>Loading...</p>
  }

  if(session.status === "authenticated") {
    router?.push("/dashboard")
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email, password})
  }

  const handleLoginWithGoogle = async (e) => {
    sendGTMEvent({ event: 'user_id', value: 'xyz' })
    signIn("google");
    
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className={styles.input} required></input>
        <input type="password" placeholder="password" className={styles.input} required></input>
        <button className={styles.button}>Login</button>
      </form>

      <Link href="/dashboard/login" onClick={() => handleLoginWithGoogle()} >Login with Google</Link>
    </div>
  )
}

export default Login