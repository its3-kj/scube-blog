import React from "react";
import { getBlogById } from "@/lib/getBlog";

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogArticlePage;
