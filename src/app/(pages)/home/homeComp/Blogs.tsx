import React from "react";
import CardList from "./CardList";
import BlogsMenu from "./BlogsMenu";
import SectionTitle from "@/components/ui/SectionTitle";

const Blogs = () => {
  return (
    <div className=" max-container">
      <SectionTitle title="Recent Posts" />
      <div className="grid md:grid-cols-5 gap-4">
        <div className="col-span-3">
          <CardList />
        </div>
        <div className=" col-span-2">
          <BlogsMenu />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
