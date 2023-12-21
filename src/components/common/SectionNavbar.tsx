import Link from 'next/link'
import React from 'react'

const SectionNavbar = () => {
  return (
    <nav className="w-full bg-gray-100 dark:bg-[#171B20] pt-6">
    <div className="container-layout">
      <ol className="inline-flex items-center space-x-4 md:space-x-6">
        <li className="inline-flex items-center">
          <Link
            href="/dashboard"
            className="inline-flex text-sm font-medium text-gray-800 dark:text-[#E6EDF3] border-b border-transparent hover:border-[#E6EDF3] transition delay-100 ease-linear pb-4"
          >
            {/* <HomeIcon className="mr-4 h-4 w-4" /> */}
            Dashboard
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link
            href="/dashboard/category"
            className="inline-flex text-sm font-medium text-gray-800 dark:text-[#E6EDF3] border-b border-transparent hover:border-[#E6EDF3] transition delay-100 ease-linear pb-4"
          >
            {/* <HomeIcon className="mr-4 h-4 w-4" /> */}
            Category
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link
            href="/dashboard/subscribers"
            className="inline-flex text-sm font-medium text-gray-800 dark:text-[#E6EDF3] border-b border-transparent hover:border-[#E6EDF3] transition delay-100 ease-linear pb-4"
          >
            {/* <HomeIcon className="mr-4 h-4 w-4" /> */}
            Subscribers
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link
            href="/dashboard/messages"
            className="inline-flex text-sm font-medium text-gray-800 dark:text-[#E6EDF3] border-b border-transparent hover:border-[#E6EDF3] transition delay-100 ease-linear pb-4"
          >
            {/* <HomeIcon className="mr-4 h-4 w-4" /> */}
            Messages
          </Link>
        </li>
      </ol>
      </div>
    </nav>
  )
}

export default SectionNavbar
