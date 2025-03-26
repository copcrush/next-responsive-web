"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrRobot } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNavbar: () => void;
};

const Navbar = ({ openNavbar }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollY < 90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`transition-all ${
        navbg ? "bg-white shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col">
            <GrRobot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-blue-800 font-bold">
            DevZ
          </h1>
        </div>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-black hover:text-rose-500 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">
              Create Account
            </span>
            <span className="relative invisible">Create Account</span>
          </a>
        </div>

        {/* Hamberger Menu */}
        <HiBars3BottomRight
          onClick={openNavbar}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
