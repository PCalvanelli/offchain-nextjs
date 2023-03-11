import Head from 'next/head'
import styles from '@/styles/Documentation.module.css'
import AlertBanner from '@/components/Banner';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';


export default function Documentation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Off Chain Data Documentation</title>
        <meta name="description" content="Off Chain Data Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <AlertBanner />
      <Hero />
      <Features />
      <main className={styles.main}>
        <h1 className={styles.title}>Why Off Chain Data?</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Getting Started &rarr;</h2>
            <p>Learn how to get started with Off Chain Data.</p>
          </div>

          <div className={styles.card}>
            <h2>API Reference &rarr;</h2>
            <p>Find detailed information about Off Chain Data API.</p>
          </div>

          <div className={styles.card}>
            <h2>Guides &rarr;</h2>
            <p>Read guides about using Off Chain Data in different scenarios.</p>
          </div>

          <div className={styles.card}>
            <h2>FAQ &rarr;</h2>
            <p>Find answers to frequently asked questions about Off Chain Data.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://offchaindata.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Off Chain Data
        </a>
      </footer>
    </div>
  )
}
