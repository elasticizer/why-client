import React from 'react'
import Special from './special'

export default function Specialleft() {
  return (
      <>
          <>
              {/* Hero */}
              <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
                  {/* Grid */}
                  <div className="grid lg:grid-cols-2 lg:gap-x-1 xl:gap-x-12 lg:items-center ">
                      <div className="lg:col-span-3">
                          <div>
                              
                          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                              Build Better Products
                          </h1>
                          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                              Introducing a new way for your brand to reach the creative community.
                          </p>
                         
                          </div>

                          {/* Brands */}
                          <div className="mt-6 lg:mt-12">
                              <Special/>
                          </div>
                          {/* End Brands */}
                      </div>
                      {/* End Col */}
                  </div>
              </div>
          </>

    </>
  )
}
