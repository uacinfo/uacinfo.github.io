"use client"

import Image from "next/image"
import AddItemScreenshot from "@/public/images/expiryhq/add-item-screenshot.png"

export default function ExpiryHQFeatures() {
  const features = [
    {
      title: "Works Offline Anywhere",
      description: "Reliable in basement stockrooms, rural supply stores, or behind the retail counter without signal drops or network delays.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Smart Urgency Badging",
      description: "Visual color-coded hierarchy immediately spots what needs attention: Expired (Red), Today (Orange), Expiring Soon ≤3d (Amber), Good >7d (Green).",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "1-Tap Quick Presets",
      description: "Add items in seconds with convenient preset chips: Today, +3 Days, +1 Week, +2 Weeks, +1 Month, plus an interactive calendar date picker.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Live Search & Filter Chips",
      description: "Instantly filter your items with a single tap (All, Expiring Soon, Expired, Good) and real-time substring search.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Swipe Actions with Instant Undo",
      description: "Dismiss or consume tracked items with natural swipe-to-dismiss gestures. Accidental deletions can be reversed instantly with the SnackBar undo.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
    {
      title: "Instant Setup & Ad-Free",
      description: "Start logging stock in seconds with zero registration friction. A clean, distraction-free interface built for fast daily operations.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative bg-gray-50 py-20" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Built for Fast Daily Stock Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything your pharmacy, supply depot, or household needs to prevent expired goods and eliminate inventory waste.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-200 border border-gray-100 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Section with screenshot */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Zero Effort Entry</span>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
              Add new items in seconds with Quick Presets
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Tired of complex date pickers? With ExpiryHQ, one tap on <strong>+3 Days</strong>, <strong>+1 Week</strong>, or <strong>+1 Month</strong> sets the target expiry instantly. You can also pick a custom calendar date whenever needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Pharmacies & Chemists</span>
              <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Agriculture & Seed Stores</span>
              <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Retail & Grocery Counters</span>
              <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Household & Pantry</span>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="max-w-[260px] sm:max-w-[280px] rounded-[36px] p-2 bg-gray-900 shadow-xl ring-1 ring-gray-800">
              <Image
                src={AddItemScreenshot}
                width={280}
                height={626}
                alt="ExpiryHQ Add Item Screen"
                className="rounded-[30px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
