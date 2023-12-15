import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

export function Footer() {
  return (
    <footer className="w-full pt-8 bg-[#010409] border-t border-[#30363D]">
      <div className="mx-auto container-layout flex items-center justify-between">
        <div className="inline-flex items-center">
          <span className="text-lg font-bold">CareerLooms</span>
        </div>
        <div className="hidden items-center md:inline-flex">
          <span className="text-sm font-medium text-black">Ready to Get Started ?</span>
          <button
            type="button"
            className="ml-2 btn bg-blue-700 text-white text-sm font-semibold shadow-sm hover:bg-blue-800"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="border-t border-[#30363D] my-8"/>
      <div className="mx-auto container-layout flex flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
        <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-[#E6EDF3] ">Quick Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Home</li>
                <li>Jobs Search</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-[#E6EDF3]">Jobs</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Full Time</li>
                <li>IT Jobs</li>
                <li>Software Developer</li>
                <li>Work From Home</li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-[#E6EDF3]">Important Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Post a Job</li>
                <li>Login</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            
        </div>
      </div>

      <div className="bg-[#010409] border-t border-[#30363D] mt-8 py-4">
      <h1 className="text-center">© 2023 CareerLooms. All rights reserved.</h1>
      </div>
    </footer>
  )
}
