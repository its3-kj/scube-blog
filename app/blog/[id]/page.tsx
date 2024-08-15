import React from "react";
import { getBlogById } from "@/lib/getBlog";
import parse from "html-react-parser";

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);
  return (
    <div>
      <h1>{blog.title}</h1>
      <div>{parse(blog.content)}</div>
    </div>
  );
};

export default BlogArticlePage;
