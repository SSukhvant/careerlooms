"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import BreadCrumb from "@/components/common/BreadCrumb";
import Link from "next/link";

function classNames({ ...classes }: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <BreadCrumb path="Contact Us" />
      <div className="isolate bg-white dark:bg-[#0D1117] px-6 py-20 pb-20 sm:pt-20 sm:pb-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-[#E6EDF3] sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-[#848D97]">
            Our friendly team would love to hear from you.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-12 max-w-xl sm:mt-16"
        >
          <div className="grid grid-cols-1 gap-y-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-[#E6EDF3] "
              >
                Full name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-[#E6EDF3]  shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#30363D] dark:bg-[#161B22] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-[#E6EDF3] "
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-[#E6EDF3]  shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#30363D] dark:bg-[#161B22] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-[#E6EDF3] "
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 dark:text-[#E6EDF3]  shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#30363D] dark:bg-[#161B22] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-[#E6EDF3] "
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-[#E6EDF3] shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#30363D] dark:bg-[#161B22] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={`${
                    agreed ? "bg-indigo-600" : "bg-[#E6EDF3] dark:bg-[#161B22]"
                  } flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={`${
                      agreed ? "translate-x-3.5" : "translate-x-0"
                    } h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600 dark:text-[#848D97]">
                By selecting this, you agree to our{" "}
                <Link href="/" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </Link>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {`Let's talk`}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
