
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]) // Add `router.events` to the dependency array

  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
      <Analytics />
    </PostHogProvider>
  )
}
