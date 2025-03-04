'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'  // If there's a Header component

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      {/* Optional: Add a Header component */}
      <Header />

      <main className="grow">
        {children}
      </main>

      {/* Footer with "Manage Account" link */}
      <Footer />
    </>
  )
}