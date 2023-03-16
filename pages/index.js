import Head from 'next/head'
import styles from '@/styles/Documentation.module.css'
import AlertBanner from '@/components/Banner';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';


export default function Documentation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Off Chain Data</title>
        <meta name="description" content="Off Chain Data Documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <AlertBanner />
      <Hero />
      <Features />

      <Footer />

    </div>
  )
}
