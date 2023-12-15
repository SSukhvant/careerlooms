import BreadCrumb from '@/components/common/BreadCrumb'
import jobs from '@/components/common/jobs'
import { ArrowRightIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import google from '@/assets/google.svg'

const page = () => {
  return (
    <>
    <BreadCrumb path="Jobs Search"/>

    <section className="pt-12 pb-20 dark:bg-[#0D1117]">
      <div className="container-layout">
        <div>
          <h1 className="text-2xl font-semibold">Jobs Search</h1>
          {/* <Link href="/" className="flex-center gap-1">
            View All <ArrowRightIcon className="h-4 w-4" />
          </Link> */}
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {jobs.map((post) => (
            <div
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between rounded-lg p-6 border dark:border-[#21262D] bg-white dark:bg-[#0D1117]"
            >
              <div className="group relative">
                <h3 className="text-xl font-semibold leading-6 text-gray-900 dark:text-[#E6EDF3] group-hover:text-gray-600">
                  <span>
                    <span className="absolute inset-0" />
                    {post.title}
                  </span>
                </h3>
                <div className="flex items-center gap-x-4 text-xs mt-2">
                  <span
                    className="relative z-10 rounded py-1 px-2 text-sm uppercase bg-[#E7F6EA] font-medium text-green-500 dark:bg-[#07ae7133] dark:text-[#0CA075] hover:bg-gray-100"
                  >
                    {post.category.title}
                  </span>
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p> */}
              </div>
              <div className="relative mt-4 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#EDEFF5] dark:bg-[#0D1117] dark:border dark:border-[#21262D] p-3">
                  {post.author.imageUrl == "Google" ? (
                    <Image src={google} alt="" width={24} height={24} />
                  ) : (
                    <BuildingOffice2Icon
                      className="h-8 w-8 text-blue-700 dark:text-[#E6EDF3]"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-[#E6EDF3]">
                    <span>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </span>
                  </p>
                  <p className="text-gray-600 dark:text-[#848D97]">{post.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default page
