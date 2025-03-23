import React from "react";
import Hero from "./(pages)/home/homeComp/Hero";
import PopularCategories from "./(pages)/home/homeComp/PopularCategories";
import Blogs from "./(pages)/home/homeComp/Blogs";

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <PopularCategories />
      <Blogs />
    </div>
  );
};

export default Home;
