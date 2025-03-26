import Image from "next/image";
import React from "react";

const AuthorInfo = () => {
  return (
    <div className="flex items-center gap-3 pl-1 mt-6">
      <Image
        src="/assets/p1.jpeg"
        width={500}
        height={500}
        alt="hero"
        className="rounded-full size-11 brightness-90 ring-2 ring-offset-2 ring-green-500"
      />
      <div>
        <h2 className=" font-bold -mb-0.5 ">John Doe</h2>
        <span className="text-sm font-semibold text-gray-500 ">12 May 2023</span>
      </div>
    </div>
  );
};

export default AuthorInfo;
