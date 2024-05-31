'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google'

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

  // Hàm tạo cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  // Hàm lấy cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  const handleLoginWithGoogle = async (e) => {
    
    setCookie('user_id', (Math.floor(Math.random() * 10000) + 1) + 'user', 30);
    sendGTMEvent({ event: 'login', user_id: getCookie('user_id')})
    signIn("google");
    
  }
  return (
    <div className={styles.container}>
      <form id="newsletter-form" className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className={styles.input} required></input>
        <input type="password" placeholder="password" className={styles.input} required></input>
        <button className={styles.button}>Login</button>
      </form>

      <Link href="/dashboard/login" onClick={() => handleLoginWithGoogle()} >Login with Google</Link>
    </div>
  )
}

export default Login