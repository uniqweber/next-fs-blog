import React from "react";
import BlogsHeader from "./blogsComp/BlogsHeader";
import AllBlogs from "./blogsComp/AllBlogs";

const AllBlog = () => {
  return (
    <div className="max-container space-y-6">
      <BlogsHeader />
      <AllBlogs />
    </div>
  );
};

export default AllBlog;
