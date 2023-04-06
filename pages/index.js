import Head from 'next/head';
import { Grid, GridColumn } from 'semantic-ui-react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import SampleDataAcquisition from '@/components/SampleDataAcquisition';
import { Auth0Provider } from '@auth0/auth0-react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import styles from '@/styles/Home.module.css';

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
        <PostHogProvider client={posthog}>
          <Head>
            <title>Off Chain Data | Discover the adoption of digital assets</title>
            <meta name="description" content="Off Chain Data is a qualitative data repository for digital asset adoption." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar className={styles.navbar} />
          <Grid>
            <Grid.Row columns={1} style={{ marginTop: '6em' }}>
              <Grid.Column>
                <Hero className={styles.hero} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <GridColumn style={{ marginTop: '6em', marginBottom: '6em', marginLeft: 'auto', marginRight: 'auto' }}>
                <SampleDataAcquisition />
              </GridColumn>
              <Grid.Column>
                <Features className={styles.features} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer className={styles.footer} />
        </PostHogProvider>
      </div>
    </Auth0Provider>
  );
}

export default Documentation;
