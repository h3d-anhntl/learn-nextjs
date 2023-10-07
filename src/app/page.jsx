import Image from 'next/image'
import styles from './page.module.css'
import Paint1 from 'public/1.jpg'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idie into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        {/* <Image width={600} height={500} src="https://images.pexels.com/photos/8616015/pexels-photo-8616015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Paint 1'/> */}
        <Image src={Paint1} alt='' className={styles.img}/> 
      </div>
    </div>
  )
}