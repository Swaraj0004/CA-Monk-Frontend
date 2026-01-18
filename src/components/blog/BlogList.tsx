import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/services/blogApi";
import BlogCard from "./BlogCard";
import BlogListSkeleton from "./BlogListSkeleton";
import { Blog } from "@/types/blog";

export default function BlogList({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const { data, isLoading, isError } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) {
    return <BlogListSkeleton />;
  }

  if (isError || !data) {
    return (
      <p className="text-sm text-red-500">
        Failed to load articles
      </p>
    );
  }

  const sortedBlogs = [...data].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="h-[calc(100vh-220px)] space-y-4 overflow-y-auto pr-2 scrollbar-hide">
      {sortedBlogs.map((blog) => (
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
