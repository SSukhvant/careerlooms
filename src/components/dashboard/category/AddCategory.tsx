"use client";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const AddCategory: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <div className="py-4 dark:bg-[#0D1117]">
      <form className="container-layout">
        <div className="space-y-4">
        <div className="flex space-y-4 items-center justify-start md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Categories</h2>
            <p className="mt-1 text-sm text-gray-700 dark:text-[#848D97]">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
        </div>

          <div className="pb-2">
            <div className="mt-10 flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0 gap-x-4">
            <div className="flex-1 flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0 gap-x-4">
              <div className="flex-1">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="eg. IT Jobs"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#E6EDF3]"
                >
                  Sub Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="eg. Full Stack Developer"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-[#E6EDF3] focus:ring-2 dark:ring-[#30363D] dark:focus:bg-[#161B22] dark:bg-[#161B22] placeholder:text-gray-400 focus:outline-none pl-2 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              </div>
              <div className="">
              <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add New Category
            </button>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
