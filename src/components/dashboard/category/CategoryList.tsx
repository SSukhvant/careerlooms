import React from "react";

const categories = [
  {
    category: "Front-end Developer",
    subCategory: "Developer",
  },
  {
    category: "Front-end Developer",
    subCategory: "Developer",
  },
  {
    category: "Front-end Developer",
    subCategory: "Developer",
  },
  {
    category: "Front-end Developer",
    subCategory: "Developer",
  },
  {
    category: "Front-end Developer",
    subCategory: "Developer",
  },
];

export default function CategoryList() {
  return (
    <section className="dark:bg-[#0D1117]">
      <div className="container-layout px-4 py-4">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-[#21262D] md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-[#21262D]">
                  <thead className="bg-gray-50 dark:bg-[#010409]">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700 dark:text-[#E6EDF3]"
                      >
                        Category
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700 dark:text-[#E6EDF3]"
                      >
                        Sub Category
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-[#21262D] bg-white dark:bg-[#010409]">
                    {categories.map((category) => (
                      <tr key={category.category}>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 dark:text-[#E6EDF3]">
                            {category.category}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 dark:text-[#E6EDF3]">
                          {category.subCategory}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-gray-700 dark:text-[#848D97]"
                          >
                            Edit
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
          <a
            href="#"
            className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900 dark:text-[#E6EDF3]"
          >
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
          <a
            href="#"
            className="mx-2 text-sm font-semibold text-gray-900 dark:text-[#E6EDF3]"
          >
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
