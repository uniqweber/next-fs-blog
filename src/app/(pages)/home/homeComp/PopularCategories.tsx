import {popularCategories} from "@/constants";
import React from "react";

const PopularCategories = () => {
  return (
    <div className="max-container">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularCategories.map((category) => (
          <div
            key={category.id}
            className={`flex cursor-pointer hover:scale-105 duration-300 items-center   gap-3  p-3 rounded-xl ${category.bgColor}`}
          >
            <div className="size-12 bg-white rounded-md"></div>
            <div>
              <h5 className="font-bold text-lg">{category.name}</h5>
              <p className="text-gray-500 font-semibold ">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
