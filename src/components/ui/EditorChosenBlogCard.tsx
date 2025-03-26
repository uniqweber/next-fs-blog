import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularBlogCard = () => {
  return (
    <Link href={"/blogs/1"} className="flex items-start gap-4 rounded-2xl ">
      <Image src="/assets/p1.jpeg" width={300} height={300} alt="p1" className="flex-shrink-0 object-cover w-21 h-21 rounded-xl brightness-90" />
      <div className="w-full -mt-1">
        <span className="text-[10px] pt-0.5  inline-flex items-center justify-center bg-rose-200  text-rose-500 rounded px-2 font-semibold">
          Culture
        </span>
        <h4 className="text-sm font-bold   mt-1 -mb-px  leading-4.5 line-clamp-2">How to start a blog in 10 minutes with Next.js and Tailwind CSS</h4>
        <span className="text-sm font-semibold text-gray-500">By - John Doe</span>
      </div>
    </Link>
  );
};

export default PopularBlogCard;
