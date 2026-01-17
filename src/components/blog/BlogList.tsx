import { useEffect, useState } from "react";
import { getBlogs } from "@/services/blogApi";
import BlogCard from "./BlogCard";
import { Blog } from "@/types/blog";

export default function BlogList({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;         
  onSelect: (id: string) => void;    
}) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">Loading articles…</p>;
  }

  return (
    <div className="h-[calc(100vh-220px)] space-y-4 overflow-y-auto pr-2 scrollbar-hide">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}                    
          blog={blog}
          isActive={blog.id === selectedId}    
          onClick={onSelect}                   
        />
      ))}
    </div>
  );
}
