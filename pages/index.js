import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import AlertBanner from '@/components/Banner';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { Auth0Provider } from '@auth0/auth0-react';
import posthog from 'posthog-js';
import { PostHogProvider} from 'posthog-js/react'

posthog.init(
  process.env.REACT_APP_PUBLIC_POSTHOG_KEY,
  {
    api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
  }
);

function Documentation({ children }) {
  return (
    <Auth0Provider
      domain="dev-nq6ou7gel7kp42hk.us.auth0.com"
      clientId="cliNQg6koEUz10BykOXKlEcnVv97jCDc"
      redirectUri={typeof window !== 'undefined' && window.location.origin}
    >
      <div className={styles.container}>
        <Head>
          <title>Off Chain Data</title>
          <meta name="description" content="Off Chain Data is a qualitative data repository for digital asset adoption." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PostHogProvider client={posthog}>
        <NavBar />
        <AlertBanner />
        <Hero />
        <Features />
        <Footer />
        </PostHogProvider>
      </div>
    </Auth0Provider>

  );
}

export default Documentation;
