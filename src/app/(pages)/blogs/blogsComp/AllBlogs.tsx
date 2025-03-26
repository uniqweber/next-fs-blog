import React from "react";
import BlogsMenu from "../../home/homeComp/BlogsMenu";
import BlogContainer from "./BlogContainer";

const AllBlogs = () => {
  return (
    <div className="grid md:grid-cols-5 gap-10 max-container">
      <div className="md:col-span-3">
        <BlogContainer />
      </div>
      <div className="md:col-span-2">
        <BlogsMenu />
      </div>
    </div>
  );
};

export default AllBlogs;
