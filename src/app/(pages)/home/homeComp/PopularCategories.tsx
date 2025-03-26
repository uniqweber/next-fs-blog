import {popularCategories} from "@/constants";
import Link from "next/link";
import React from "react";

const PopularCategories = () => {
  return (
    <div className="max-container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {popularCategories.map((category) => (
          <Link
            href={"/blogs"}
            key={category.id}
            className={`flex cursor-pointer hover:scale-105 duration-300 items-center   gap-3  p-3 rounded-xl ${category.bgColor}`}
          >
            <div className="bg-white rounded-md size-12"></div>
            <div>
              <h5 className="text-lg font-bold">{category.name}</h5>
              <p className="font-semibold text-gray-500 ">{category.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
