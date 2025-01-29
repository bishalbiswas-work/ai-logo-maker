"use client";


import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'

const Hero = () => {
  const [logoTitle, setLogoTitle] = useState();
  return (
    <section className=" py-36 px-6 text-center">
      {/*     <section className="bg-[url('/assets/hero-bg-new-2.png')] bg-cover bg-center  bg-no-repeat py-40 px-6 text-center">
 */}

      <div className="max-w-3xl mx-auto">
        {/* Logo and Title */}


        {/* <div className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full">
          Logoipsum AI
        </div> */}

        {/* Heading with Gradient Text */}
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">

          <span className="inline-block px-0 py-2 border-2 rounded-lg text-white font-bold bg-white border-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-border">
            <span className="bg-white border-none rounded-lg">
              <span className="font-normal px-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                Free AI Logo
              </span>
            </span>

          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">

          </span>{" "}
          Design Instantly!
          {/* maker <span className="text-gray-900">online.</span> */}
        </h1>


        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg">
          Create bold, professional logos in seconds! Easy, fast, and 100% customizable—no design skills needed!
        </p>

        {/* Input Field & Button */}
        {/* <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Enter your business name..."
            className="px-4 py-3 w-full sm:w-96 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg gap-x-3 hover:opacity-90 transition duration-300">
            Create now
          </button>
        </div> */}
        <div className="flex items-center justify-center pt-8 ">
          <div className="flex items-center justify-between w-full sm:w-[500px] bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder={Lookup.InputTitlePlaceholder}
              className="flex-grow bg-transparent border-none outline-none text-gray-900 px-3 text-lg"
              onChange={(event) => setLogoTitle(event.target.value)}
              value={logoTitle}
            />
            <Link href={`/create?title=${encodeURIComponent(logoTitle)}`}>
              <button className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full hover:opacity-90 transition duration-300">
                Create
              </button>
            </Link>
          </div>
        </div>



      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
