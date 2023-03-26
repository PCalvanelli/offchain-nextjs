import Head from 'next/head'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import AlertBanner from '@/components/Banner';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { Auth0Provider } from '@auth0/auth0-react';

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

        <Script id="posthog">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('phc_RqBHjrPnyqns302EaQdSiK3Oc6P2hwJxiKc55e7UhPs',{api_host:'https://app.posthog.com'})`}
        </Script>


        <NavBar />
        <AlertBanner />
        <Hero />
        <Features />

        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default Documentation;
