import React from "react";
import { getBlogs } from "@/lib/getBlog";
import Link from "next/link";

const BlogArticlePage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const blogs = await getBlogs();
  const list = [];
  blogs.map((blog) => {
    blog.categories.map((cat) => {
      if (cat.slug === params.category) {
        console.log("一致", blog.id, params.category);
        list.push({ id: blog.id, title: blog.title, categoryName: cat.name });
      }
    });
  });

  return (
    <div>
      <h1>{list[0]?.categoryName ?? params.category}関連の一覧</h1>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogArticlePage;
