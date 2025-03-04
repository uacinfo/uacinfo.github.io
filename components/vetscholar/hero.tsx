import Link from "next/link"
import Image from "next/image"
import VetScholarApp from "@/public/images/vetscholar/hero-image.png"

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left column */}
            <div className="lg:w-1/2 text-center lg:text-left lg:pr-12">
              <h1
                className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-6"
                data-aos="zoom-y-out"
              >
                Master Veterinary Knowledge with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-400">
                  VetScholar
                </span>
              </h1>
              <div className="max-w-3xl mx-auto lg:mx-0">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Take customized tests on various veterinary subjects, track your progress, and share with friends.
                  Your path to mastery starts here.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center lg:justify-start"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <Link
                      href="#"
                      className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0"
                    >
                      Download App
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#features"
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:w-1/2 lg:pl-12 mt-12 lg:mt-0" data-aos="zoom-y-out" data-aos-delay="300">
              <div className="relative">
                <Image
                  src={VetScholarApp || "/placeholder.svg"}
                  width={600}
                  height={450}
                  alt="VetScholar App"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-400/20 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

