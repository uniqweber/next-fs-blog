import PopularBlogCard from "@/components/ui/PopularBlogCard";
import EditorChosenBlogCard from "@/components/ui/EditorChosenBlogCard";
import PopularSectionTitle from "@/components/ui/PopularSectionTitle";
import React from "react";
import {popularCategories} from "@/constants";
import Link from "next/link";

const BlogsMenu = () => {
  return (
    <div className="space-y-10">
      <div>
        <PopularSectionTitle title="Most Popular" subtitle="What's new" />
        <div className="space-y-2">
          <PopularBlogCard />
          <PopularBlogCard />
          <PopularBlogCard />
          <PopularBlogCard />
        </div>
      </div>
      <div>
        <PopularSectionTitle title="Most Popular" subtitle="Discover by topic" />
        <div>
          <div className="grid grid-cols-2 gap-2">
            {popularCategories.map((category) => (
              <Link
                href={"/blogs"}
                key={category.id}
                className={`flex cursor-pointer hover:scale-105 duration-300 items-center  justify-center gap-3  p-3 rounded-xl ${category.bgColor}`}
              >
                {/* <Image src={category.img} width={30} height={30} alt={category.name} className="object-cover w-8 h-8 rounded-full ring-4 ring-white" /> */}
                <h5 className="font-semibold ">{category.name}</h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <PopularSectionTitle title="Editor's Pick" subtitle="Chosen by our editors" />
        <div className="space-y-3">
          <EditorChosenBlogCard />
          <EditorChosenBlogCard />
          <EditorChosenBlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogsMenu;
