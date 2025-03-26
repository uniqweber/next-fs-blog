import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import Comment from "./Comment";

const CommentBox = () => {
  return (
    <div className="mt-10">
      <SectionTitle title="Comments" />
      <div className="mb-10">
        <textarea placeholder="Leave a comment" className="w-full h-32 px-4 py-3 border border-gray-200 rounded-xl"></textarea>
        <button className="w-full h-10 px-10 mt-4 text-white bg-blue-600 rounded-full">Submit</button>
      </div>
      <Comment />
    </div>
  );
};

export default CommentBox;
