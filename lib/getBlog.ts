import { client } from "./microcmsClient";

export type Blog = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
};

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await client.get({ endpoint: "blogs" });
  return response.contents;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await client.get({ endpoint: `blogs/${id}` });
  return response;
};

export const getBlogsByCategory = async (category: string): Promise<Blog[]> => {
  const response = await client.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${category}` },
  });
  return response.contents;
};
