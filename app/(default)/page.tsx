export const metadata = {
  title: 'UAC Home',
  description: 'UAC Software Consultation',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      {/* <Testimonials /> */}
      <div className="bg-gray-100 py-12">
        <Newsletter />
      </div>
    </>
  )
}
