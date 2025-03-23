import SectionTitle from "@/components/ui/SectionTitle";
import {popularCategories} from "@/constants";
import Image from "next/image";
import React from "react";

const PopularCategories = () => {
  return (
    <div className="max-container">
      <SectionTitle title="Popular Categories" />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {popularCategories.map((category) => (
          <div key={category.id} className={`flex cursor-pointer hover:scale-105 duration-300 items-center  justify-center gap-3 mt-3 p-3 rounded-xl ${category.bgColor}`}>
            {/* <Image src={category.img} width={30} height={30} alt={category.name} className="rounded-full h-8 w-8 object-cover ring-4 ring-white" /> */}
            <h5 className="font-semibold ">{category.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
