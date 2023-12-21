import React from 'react'

const contacts = [
  {
    fullName: 'John Doe',
    email: 'john@devui.com',
    message: 'Front-end Developer',
    agree: true,
 },
 {
    fullName: 'John Doe',
    email: 'john@devui.com',
    message: 'Front-end Developer',
    agree: true,
 },
 {
    fullName: 'John Doe',
    email: 'john@devui.com',
    message: 'Front-end Developer',
    agree: false,
 },
 {
    fullName: 'John Doe',
    email: 'john@devui.com',
    message: 'Front-end Developer',
    agree: true,
 },
]

export function MessagesList() {
  return (
    <section className="dark:bg-[#0D1117]">
      <div className="container-layout px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Message</h2>
            <p className="mt-1 text-sm text-gray-700 dark:text-[#848D97]">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-[#21262D] md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-[#21262D]">
                  <thead className="bg-gray-50 dark:bg-[#010409]">
                    <tr>
                      <th
                        scope="col"
                        className="px-8 py-3.5 text-left text-sm font-normal text-gray-700 dark:text-[#E6EDF3]"
                      >
                        <span>Full Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700 dark:text-[#E6EDF3]"
                      >
                        Message
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700 dark:text-[#E6EDF3]"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-[#21262D] bg-white dark:bg-[#010409]">
                    {contacts.map((person, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-[#E6EDF3]">{person.fullName}</div>
                              <div className="text-sm text-gray-700 dark:text-[#848D97]">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 dark:text-[#E6EDF3]">{person.message}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {person.agree ? "Agree"  : "Disagree"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-700 dark:text-[#848D97]">
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900 dark:text-[#E6EDF3]">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 dark:text-[#E6EDF3]"
           >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 dark:text-[#E6EDF3]"
           >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 dark:text-[#E6EDF3]"
           >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 dark:text-[#E6EDF3]"
           >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900 dark:text-[#E6EDF3]">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
