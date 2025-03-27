import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-[130vh] sm:h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Make the smartest investment
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]">
            Chase New, Operator, and Play with{" "}
            <span className="text-rose-700">DevZ</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
            Step into a world of smart investments and groundbreaking innovation
            with
            <span className="text-rose-700 ml-1">DevZ</span>. We blend
            cutting-edge technology with strategic insights to keep you ahead of
            the curve. Whether you're a developer, investor, or visionary
            looking to bring ideas to life, we're here to help you build a
            future that thrives and evolves with you.
          </p>

          {/* Ratings */}
          <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/google.svg"
                alt="google"
                width={40}
                height={40}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                  4.5
                </h1>
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <BsStarHalf className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Best Rated on Google
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/linkedin.svg"
                alt="google"
                width={40}
                height={40}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                  4.7
                </h1>
                <div className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <BsStarHalf className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Best Rated on Google
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500"
            >
              Learn more...
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <Image
            src="/images/landing.jpg"
            alt="landing"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
