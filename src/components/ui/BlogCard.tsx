import Image from "next/image";
import React from "react";

const Post = () => {
  const date = new Date().toDateString();
  return (
    <div className="flex md:h-52 flex-col md:flex-row items-start gap-4 ">
      <Image
        src="/assets/p1.jpeg"
        width={300}
        height={300}
        alt="p1"
        className="w-full md:w-60 flex-shrink-0 h-52 md:h-full object-cover rounded-xl brightness-75"
      />
      <div className="w-full relative h-full ">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <time className="text-gray-500">{date} - </time>
          <span className="uppercase text-green-600 text-[13px]">Culture</span>
        </div>
        <h3
          title=" How to start a blog in 10 minutes with Next.js and Tailwind CSS"
          className="text-xl font-bold  my-2 line-clamp-2 leading-6"
        >
          How to start a blog in 10 minutes with Next.js and Tailwind CSS
        </h3>
        <p className="text-gray-500 text-base line-clamp-4 leading-5.5 mb-2">
          Discover the journey of creating a blog using Next.js and Tailwind CSS. Unlock the secrets to building a modern, responsive blog with ease,
          and explore the powerful features that make it stand out. Join us as we delve into the world of web development, sharing tips and insights
          along the way.
        </p>
        <button className="static md:absolute bottom-0 left-0">
          <span className="text-sm font-semibold hover:text-blue-500">Read More </span>
        </button>
      </div>
    </div>
  );
};

export default Post;
