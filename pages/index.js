import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maut Ka Saudagar </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mks.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://pranx.com/static-tv-noise/">My Website</a>
        </h1>

        <h3> Ohhh Fu*k   </h3>

      

       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://pestgame.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <span className={styles.logo}>
            <Image src="/mks.svg" alt="Vercel Logo" width={72} height={76} />
          </span>
        </a>
      </footer>
    </div>
  )
}
