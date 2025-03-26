import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen flex items-center flex-col justify-center">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Make the smartest investment
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 loading-[2.5rem] md:loading-[3.5rem]">
            Chase New, Operator, and Play with{" "}
            <span className="text-rose-700">DevZ</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            laudantium molestiae, quo libero id, esse corporis culpa iure
            dignissimos in nihil sapiente minus obcaecati unde numquam laborum?
            Reprehenderit amet cumque omnis exercitationem veritatis! Nobis
            mollitia sint odit tempore at commodi.
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
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-green-600 border border-transparent rounded-full md:w-auto hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Learn more...
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-red-600 border border-transparent rounded-full md:w-auto hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div>
          <Image
            src="/images/landing.jpg"
            alt="landing"
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
