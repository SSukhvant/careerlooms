import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({path}: any) => {
  return (
    <nav className="flex w-full items-start rounded-md bg-gray-100 py-8" aria-label="Breadcrumb">
    <div className="container-layout">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-gray-800 hover:underline"
          >
            <HomeIcon className="mr-4 h-4 w-4" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 ">/</span>
            <h1 className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              {path}
            </h1>
          </div>
        </li>
        {/* <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800 ">/</span>
            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              Breadcrumbs
            </span>
          </div>
        </li> */}
      </ol>
      </div>
    </nav>
  )
}

export default BreadCrumb
