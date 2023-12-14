"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3BottomRightIcon, MoonIcon, PlusSmallIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
// import useDarkMode from '@/hooks/useDarkMode'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Job Search', href: '/jobs' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {theme, setTheme } = useTheme()

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-[#010409] border-b py-[8px] dark:bg-dark-card dark:border-slate-800">
     <nav className="container-layout flex justify-between items-center ">
      <div className="logo text-sm font-semibold text-gray-900 dark:text-[#E6EDF3]">
      CareerLooms
      </div>
      <div className="hidden lg:flex">
        <ul className="list-none flex justify-center items-center gap-6">
        {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}className="text-sm font-semibold leading-6 text-gray-900 dark:text-[#E6EDF3]">{item.name}</Link>
              </li>
            ))}
        </ul>

      </div>
      <div className="flex-center gap-4">
          <button
            className="icon-box text-gray-900 dark:text-[#E6EDF3] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        <Link href="/" className="btn bg-[#07ae7133] text-[#0CA075] text-sm font-semibold flex justify-center items-center gap-2">
          <PlusSmallIcon className="h-5 w-5"/> Post Job
        </Link>
        <div className="icon-box lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Bars3BottomRightIcon className="h-6 w-6"/>
        </div>
      </div>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
     </nav>
    </div>
  )
}
