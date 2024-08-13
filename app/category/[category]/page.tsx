import React from "react";
import { getBlogsByCategory } from "@/lib/getBlog";
import BlogCard from "@/components/BlogCard";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const blogs = await getBlogsByCategory(params.category);

  return (
    <div>
      <h1>{params.category}のブログ</h1>
      <div>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
