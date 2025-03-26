import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = () => {
  const date = new Date().toDateString();
  return (
    <Link href={"/blogs/1"} className="flex flex-col items-start gap-4 md:h-52 md:flex-row ">
      <Image
        src="/assets/travel.png"
        width={300}
        height={300}
        alt="p1"
        className="flex-shrink-0 object-cover object-top w-full md:w-60 h-52 md:h-full rounded-xl brightness-75"
      />
      <div className="relative w-full h-full ">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <time className="text-gray-500">{date} - </time>
          <span className="uppercase text-green-600 text-[13px]">Culture</span>
        </div>
        <h3 title=" How to start a blog in 10 minutes with Next.js and Tailwind CSS" className="my-2 text-xl font-bold leading-6 line-clamp-2">
          How to start a blog in 10 minutes with Next.js and Tailwind CSS
        </h3>
        <p className="text-gray-500 text-base line-clamp-4 leading-5.5 mb-2">
          Discover the journey of creating a blog using Next.js and Tailwind CSS. Unlock the secrets to building a modern, responsive blog with ease,
          and explore the powerful features that make it stand out. Join us as we delve into the world of web development, sharing tips and insights
          along the way.
        </p>
        <button className="static bottom-0 left-0 md:absolute">
          <span className="text-sm font-semibold hover:text-blue-500">Read More </span>
        </button>
      </div>
    </Link>
  );
};

export default Post;
