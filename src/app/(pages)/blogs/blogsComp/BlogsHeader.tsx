import Image from "next/image";
import React from "react";

const BlogsHeader = () => {
  return (
    <div className="mt-6 h-50 flex items-center justify-center text-center max-container">
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
            <h1 className={`text-3xl md:text-5xl font-bold `}>Explore Blogs </h1>
            <p className=" md:text-lg md:mt-2 mt-1 text-gray-400">Gether with us to explore the world of blogging</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
