export const metadata = {
  title: 'ExpiryHQ - Expiry Tracker for Shops, Pharmacies & Households | UACInfo LLP',
  description: 'Fast, frictionless expiration date tracker for retail shops, pharmacies, agriculture supply stores, and household inventory.',
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
