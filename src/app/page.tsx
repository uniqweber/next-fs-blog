import React from "react";
import Hero from "./(pages)/home/homeComp/Hero";
import PopularCategories from "./(pages)/home/homeComp/PopularCategories";

const Home = () => {
  return (
    <main className="space-y-16">
      <Hero />
      <PopularCategories />
    </main>
  );
};

export default Home;
