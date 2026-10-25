import Link from "next/link"
import Image from "next/image"
import HeroScreenshot from "@/public/images/expiryhq/hero-screenshot.png"
import LogoIcon from "@/public/images/expiryhq/logo.png"

export default function ExpiryHQHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background illustration */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-expiry">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#E0F2FE" offset="77.4%" />
              <stop stopColor="#BAE6FD" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-expiry)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left column */}
            <div className="lg:w-3/5 text-center lg:text-left lg:pr-12">
              <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                <Image
                  src={LogoIcon}
                  width={64}
                  height={64}
                  alt="ExpiryHQ Logo"
                  className="rounded-2xl shadow-md border border-gray-100"
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Built for Pharmacies, Agri-Supply, Retail & Households
                </div>
              </div>

              <h1
                className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-6 text-gray-900"
                data-aos="zoom-y-out"
              >
                Eliminate Stock Expiry Loss with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                  ExpiryHQ
                </span>
              </h1>
              
              <div className="max-w-3xl mx-auto lg:mx-0">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  The fast, zero-friction expiration date tracker for retail shops, pharmacies, agriculture supply stores, and household essentials. Start tracking inventory immediately with no complex setup.
                </p>

                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center lg:justify-start gap-4"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.uacinfo.expiryhq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 01-.61-.918V2.732c.16-.367.378-.686.609-.918zm11.602 11.602l2.392 2.392-12.72 7.344 10.328-9.736zm0-2.832L4.883.848l12.72 7.344-2.392 2.392zm1.414 1.416l3.528-2.037a1.59 1.59 0 010 2.766l-3.528 2.037-1.414-1.383 1.414-1.383z" />
                    </svg>
                    Google Play
                  </Link>
                  <Link
                    href="/expiryhq/privacy_policy"
                    className="btn text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-300 w-full sm:w-auto"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#features"
                    className="btn text-gray-700 hover:text-gray-900 w-full sm:w-auto"
                  >
                    Explore Features ↓
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column (Phone Mockup) */}
            <div className="lg:w-2/5 lg:pl-6 mt-12 lg:mt-0 flex justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              <div className="relative max-w-[280px] sm:max-w-[320px] rounded-[40px] p-3 bg-gray-900 shadow-2xl ring-1 ring-gray-800">
                <div className="relative overflow-hidden rounded-[32px] bg-white">
                  <Image
                    src={HeroScreenshot}
                    width={320}
                    height={716}
                    alt="ExpiryHQ Screenshot"
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
