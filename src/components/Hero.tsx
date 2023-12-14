"use client"
import React from "react";
import homeimg from "@/assets/home-Illustration.png";
import Image from "next/image";
import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import images from "./common/images";
import Link from "next/link";
import { useTheme } from "next-themes";
const features = [
  {
    name: "100% Verified",
    description: "Jobs",
    icon: CheckBadgeIcon,
  },
  {
    name: "Jobs in MNC",
    description: "Companies",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Jobs in StartUp",
    description: "Companies",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Jobs in IT",
    description: "Field",
    icon: CodeBracketIcon,
  },
];

const Hero = () => {
  const {theme} = useTheme()
  return (
    <section className="bg-[#F7F7F8] dark:bg-[#010409] pt-20">
      <div className="container-layout py-20">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="w-auto lg:w-[500px] order-2 lg:order-1 mt-4 lg:mt-0">
            <h1 className="text-4xl lg:text-5xl font-medium mb-4">
              Find a job that suits <br />
              your interest & skills.
            </h1>
            <p>
            Explore career opportunities that resonate with your passions and abilities. Find jobs tailored to your interests, such as software development, marketing, or project management etc.
            </p>
            <div className="mt-8">
            <Link href="/jobs" className="btn bg-blue-700 text-white">
              Get Started
            </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image src={homeimg} alt="home" />
          </div>
        </div>

        <div className="mt-20">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-20 shadow-lg pt-4 pb-4 border dark:border-[#21262D] bg-white dark:bg-[#0D1117] rounded-lg"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-[#E6EDF3]">
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F0FA] dark:bg-[#0D1117] border dark:border-[#21262D]">
                    <feature.icon
                      className="h-6 w-6 text-blue-700 dark:text-[#848D97]"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-[#848D97]">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-24 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-6 sm:max-h-8 w-full object-contain lg:col-span-1"
            src={images.infosyslogo}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-6 sm:max-h-8 w-full object-contain lg:col-span-1"
            src={images.googlelogo}
            alt="Reform"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-6 sm:max-h-8 w-full object-contain lg:col-span-1"
            src={theme ==="dark" ? images.amazonWhite : images.amazonlogo}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-6 sm:max-h-8 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={images.cognizantlogo}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-6 sm:max-h-8 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={images.deloittelogo}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
