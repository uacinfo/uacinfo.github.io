"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Transition } from "@headlessui/react"
import Image from "next/image"
import QuestionImage from "@/public/images/vetscholar/s-question.png"
import HistoryImage from "@/public/images/vetscholar/s-history.png"
import BookmarksImage from "@/public/images/vetscholar/s-bookmarks-2.png"

export default function Features() {
  const [tab, setTab] = useState<number>(1)
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = useCallback(() => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }
  }, [])

  useEffect(() => {
    heightFix()
  }, [heightFix])

  return (
    <section className="relative" id="features">
      {/* Section background */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Explore Vet Scholar's Features</h2>
            <p className="text-xl text-gray-600">Empowering veterinary learning, one feature at a time.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful Learning Tools for Veterinary Students</h3>
                <p className="text-xl text-gray-600">
                  Whether you're a beginner or a professional, Vet Scholar helps you sharpen your veterinary knowledge
                  with customized tests, progress tracking, and the ability to collaborate and share tests with friends.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 w-full ${tab !== 1 ? "bg-white shadow-md border-gray-200 hover:shadow-lg" : "bg-gray-200 border-transparent"}`}
                  onClick={() => setTab(1)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Customized Tests</div>
                    <div className="text-gray-600">
                      Take personalized veterinary tests based on your history and expertise level.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 w-full ${tab !== 2 ? "bg-white shadow-md border-gray-200 hover:shadow-lg" : "bg-gray-200 border-transparent"}`}
                  onClick={() => setTab(2)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Track Your Progress</div>
                    <div className="text-gray-600">
                      Monitor your test history and improvements over time to enhance your skills.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 w-full ${tab !== 3 ? "bg-white shadow-md border-gray-200 hover:shadow-lg" : "bg-gray-200 border-transparent"}`}
                  onClick={() => setTab(3)}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Collaborate with Peers</div>
                    <div className="text-gray-600">
                      Bookmark questions and share tests with your friends for collaborative learning.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <div className="relative">
                        <Image
                          className="md:max-w-none mx-auto rounded-xl shadow-xl"
                          src={QuestionImage || "/placeholder.svg"}
                          width={500}
                          height={375}
                          alt="Customized Tests"
                          style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-400/20 rounded-xl pointer-events-none" />
                      </div>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <div className="relative">
                        <Image
                          className="md:max-w-none mx-auto rounded-xl shadow-xl"
                          src={HistoryImage || "/placeholder.svg"}
                          width={500}
                          height={375}
                          alt="Track Your Progress"
                          style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-400/20 rounded-xl pointer-events-none" />
                      </div>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <div className="relative">
                        <Image
                          className="md:max-w-none mx-auto rounded-xl shadow-xl"
                          src={BookmarksImage || "/placeholder.svg"}
                          width={500}
                          height={375}
                          alt="Collaborate with Peers"
                          style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-400/20 rounded-xl pointer-events-none" />
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

