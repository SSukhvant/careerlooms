"use client"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic';
import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from 'react';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const PostJob: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div className="py-20 dark:bg-[#0D1117]">
    <form className="container-layout">
      <div className="space-y-12">
        <div>
          <h2 className="text-center text-2xl font-semibold leading-7 text-gray-900 dark:text-[#E6EDF3]">Post a New Job</h2>
          <p className="text-center mt-1 text-base leading-6 text-gray-600 dark:text-[#848D97]">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                {`Company's Logo`}
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-[#30363D] px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1 dark:text-[#848D97]">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600 dark:text-[#848D97]">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                Job Tittle
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="eg. Software Developer"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
              {`Company's Name`}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="eg. Google"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                Job Level
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="eg. Fresher"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
              Types of Employment
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="eg. Full-Time"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
              Salary
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="eg. 10 LPA - 12 LPA"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
              Apply URL
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="https://www.google.com/jobs/software-developer"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="eg. Gurgaon"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  placeholder="eg. Haryana"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                Country
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  placeholder="eg. India"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]">
                Job Description
              </label>
              <ReactQuill theme="snow" className="border-0 mt-2 text-gray-900 dark:text-[#E6EDF3] border-gray-300 dark:border-[#30363D] dark:bg-[#161B22]" value={value} onChange={setValue} />
             
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-start">
        <button
          type="submit"
          className="btn bg-blue-700 text-white shadow-sm hover:bg-blue-800"
        >
          Post Job
        </button>
      </div>
    </form>
    </div>
  )
}

export default PostJob;
