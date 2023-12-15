"use client";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import images from "./common/images";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  imgUrl: string;
}
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "CareerLooms",
    message:
      "We have a great business relationship with WebDev. We had worked with several other marketing companies in the past who did not deliver results and I am happy to say WebDev is doing that for us. They help bring our vision to life in a way that makes sense",
    imgUrl: images.googlelogo,
  },
  {
    id: 2,
    name: "CareerLooms",
    message:
      "WebDev has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend WebDev to any business that needs a hand improving their internet traffic or their business.",
    imgUrl: images.googlelogo,
  },
  {
    id: 3,
    name: "CareerLooms",
    message:
      "We have a great business relationship with WebDev. We had worked with several other marketing companies in the past who did not deliver results and I am happy to say WebDev is doing that for us. They help bring our vision to life in a way that makes sense",
    imgUrl: images.googlelogo,
  },
  {
    id: 4,
    name: "CareerLooms",
    message:
      "We have a great business relationship with WebDev. We had worked with several other marketing companies in the past who did not deliver results and I am happy to say WebDev is doing that for us. They help bring our vision to life in a way that makes sense",
    imgUrl: images.googlelogo,
  },
];
const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevState) => (prevState + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-24 pt-24 sm:pt-28 sm:pb-40 bg-[#f1f2f4] dark:bg-[#0D1117]">
      <div className="container-layout grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-60 lg:h-64">
          <ChatBubbleLeftRightIcon className="absolute h-60 w-60 md:bottom-12 right-12 text-blue-700 opacity-20" />
          <div className="absolute md:top-6 pr-8">
            <h4 className="highlight z-2">Testimonials</h4>
            <h1 className="mt-2 text-4xl font-extrabold">
              See What Our <br />
              <span className="highlight">Client</span> Says
            </h1>
            <p className="mt-4">
            Discover what our clients are saying about our digital marketing solutions. Read testimonials from satisfied customers and learn how WebDev has helped businesses like yours achieve their marketing goals.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#161B22] shadow-lg p-6 flex-center border dark:border-[#30363D] rounded-xl mt-8">
          {/* <Image
            src={image}
            className="absolute bottom-0 right-2"
            height={150}
            width={150}
            alt=""
          /> */}
            <div className="transition-opacity">
              <p>&ldquo; {testimonials[activeSlide].message} &rdquo;</p>
              <div className="flex items-center justify-start gap-4 mt-6">
                <Image src={testimonials[activeSlide].imgUrl} height={50} width={50} alt="" />
                <h3 className="text-xl font-semibold">{testimonials[activeSlide].name}</h3>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
