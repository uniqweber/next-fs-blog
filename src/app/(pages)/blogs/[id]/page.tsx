import Image from "next/image";
import React from "react";
import BlogsMenu from "../../home/homeComp/BlogsMenu";
import CommentBox from "./blogDetailsComp/CommentBox";
import AuthorInfo from "@/components/ui/AuthorInfo";

const BlogDetails = () => {
  return (
    <div className="grid grid-cols-5 gap-10 pt-6 max-container">
      <div className="col-span-3 ">
        <Image src="/assets/p1.jpeg" width={500} height={200} alt="hero" className="object-cover object-top w-full h-96 brightness-50 rounded-2xl" />
        <AuthorInfo />
        <div>
          <h2 className="mb-4 text-3xl font-bold mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi tempore nisi ex ullam nesciunt facilis hic, error a! Impedit atque, vero
            dolorem dignissimos possimus in fugiat, architecto vitae ad doloremque adipisci itaque deserunt error nostrum ex provident reiciendis?
            Esse, accusantium. Alias impedit, illo cupiditate porro, accusamus doloremque laborum ullam eius eum dignissimos molestiae molestias vel
            soluta aspernatur id magnam dolore? Mollitia, magnam sed? Veritatis quos animi saepe tempore voluptate quis a ipsa iure? At quae quo
            possimus, id quasi tempore accusantium eveniet ad itaque similique eum ea, laudantium distinctio quam dolore expedita cupiditate mollitia
            iusto? Laborum facere laboriosam et laudantium libero soluta reiciendis tenetur earum impedit distinctio, corrupti vero exercitationem,
          </p>
        </div>
        <CommentBox />
      </div>
      <div className="col-span-2">
        <BlogsMenu />
      </div>
    </div>
  );
};

export default BlogDetails;
