import BlogCard from "@/components/ui/BlogCard";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";

const CardList = () => {
  return (
    <div className="space-y-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default CardList;
