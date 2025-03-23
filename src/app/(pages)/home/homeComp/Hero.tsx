import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-container h-60 md:h-96 flex items-center justify-center text-center">
      <div className="relative w-full  h-full">
        <Image
          src="/assets/p1.jpeg"
          width={500}
          height={500}
          alt="hero"
          className="w-full h-full object-cover object-top brightness-50 rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t  from-black to-transparent rounded-2xl text-white ">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className={`text-3xl md:text-5xl font-bold `}>Welcome to MindInk </h1>
            <p className=" md:text-xl md:mt-2 mt-1">A Simple Yet Powerful Blogging Platform</p>
            <p className="h-10 border mt-5 rounded-full flex items-center justify-center px-5">Explore More </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
