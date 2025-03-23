import Image from "next/image";
import React from "react";

const PopularBlogCard = () => {
  return (
    <div className="flex items-start rounded-2xl gap-4 ">
      <Image src="/assets/p1.jpeg" width={300} height={300} alt="p1" className="flex-shrink-0 w-21 h-21 rounded-xl object-cover  brightness-90" />
      <div className="w-full -mt-1">
        <span className="text-[10px] pt-0.5  inline-flex items-center justify-center bg-rose-200  text-rose-500 rounded px-2 font-semibold">
          Culture
        </span>
        <h4 className="text-sm font-bold   mt-1 -mb-px  leading-4.5 line-clamp-2">How to start a blog in 10 minutes with Next.js and Tailwind CSS</h4>
        <span className="text-sm font-semibold  text-gray-500">By - John Doe</span>
      </div>
    </div>
  );
};

export default PopularBlogCard;
