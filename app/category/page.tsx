import React from "react";
import { getALLCategories } from "@/lib/getBlog";
import Link from "next/link";

const BlogArticle = async () => {
  const categories = await getALLCategories();
  return (
    <div>
      <h1>カテゴリ一覧</h1>
      <div>
        {categories.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`category/${item.slug}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogArticle;
