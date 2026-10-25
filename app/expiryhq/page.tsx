export const metadata = {
  title: 'ExpiryHQ - Offline Expiration Date Tracker | UACInfo LLP',
  description: 'Minimal, offline-first application to track expiration dates of groceries, medicines, and household goods.',
}

import ExpiryHQHero from '@/components/expiryhq/hero'
import ExpiryHQFeatures from '@/components/expiryhq/features'

export default function ExpiryHQPage() {
  return (
    <>
      <ExpiryHQHero />
      <ExpiryHQFeatures />
    </>
  )
}
