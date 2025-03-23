import React from "react";
interface Props {
  title: string;
  subtitle: string;
}

const PopularSectionTitle = ({title, subtitle}: Props) => {
  return (
    <div className="mb-5 border-b pb-2 border-gray-200">
      <span className="text-sm font-semibold text-gray-500 ">{subtitle}</span>
      <h2 className="text-lg font-bold   leading-5">{title}</h2>
    </div>
  );
};

export default PopularSectionTitle;
