import axios from "axios";
import { Blog } from "../types/blog";

const API_URL = "http://localhost:3001/blogs";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getBlogsPage = async (page: number) => {
  const res = await axios.get<Blog[]>(
    `${API_URL}?_page=${page}&_limit=5`
  );
  return res.data;
};

export const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`);

  if (!res.ok) {
    throw new Error("Blog not found");
  }

  return res.json();
};
