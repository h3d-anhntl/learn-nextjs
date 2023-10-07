'use client'
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.conatiner}>
      <div>@2023 Lamamia. All rights reseerved.</div>
      <div className={styles.social}>
        <Image src="/icon/facebook.png" width={15} height={15} className={styles.icon}  alt="Lama Dev"></Image>
        <Image src="/icon/youtube.png" width={15} height={15} className={styles.icon} alt="Lama Dev"></Image>
        <Image src="/icon/instagram.png" width={15} height={15} className={styles.icon} alt="Lama Dev"></Image>
        <Image src="/icon/twitter.png" width={15} height={15} className={styles.icon} alt="Lama Dev"></Image>
      </div>
    </div>
  )
}

export default Footer