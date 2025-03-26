import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center mt-6 text-center max-container h-60 md:h-96">
      <div className="relative w-full h-full">
        <Image
          src="/assets/p1.jpeg"
          width={500}
          height={500}
          alt="hero"
          className="object-cover object-top w-full h-full brightness-50 rounded-2xl"
        />
        <div className="absolute inset-0 text-white bg-gradient-to-t from-black to-transparent rounded-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className={`text-3xl md:text-5xl font-bold `}>Welcome to MindInk </h1>
            <p className="mt-1 text-gray-400 md:text-lg md:mt-2">A Simple Yet Powerful Blogging Platform</p>
            <Link href="/blogs" className="flex items-center justify-center h-10 px-5 mt-5 text-sm border border-gray-400 rounded-full">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
