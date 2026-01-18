import { Blog } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { categoryConfig } from "./categoryConfig";
import { timeAgo } from "@/utils/timeAgo";

export default function BlogCard({
  blog,
  isActive,
  onClick,
}: {
  blog: Blog;
  isActive: boolean;
  onClick: (id: string) => void;
}) {
  const primaryCategory = blog.category[0];
  const primaryConfig = categoryConfig[primaryCategory];
  const Icon = primaryConfig?.icon;

  return (
    <div
      onClick={() => onClick(blog.id)}
      className={clsx(
        "relative cursor-pointer rounded-xl border bg-white p-4 transition-all duration-300",
        isActive
          ? "border-purple-500 shadow-lg"
          : "hover:shadow-sm"
      )}
    >
      {/* Active indicator */}
      {isActive && (
        <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-purple-600" />
      )}

      {/* Top row */}
      <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-2 font-semibold uppercase">
          {Icon && <Icon size={14} className={primaryConfig?.color} />}
          <span>{primaryCategory}</span>
        </div>
        <span>{timeAgo(blog.date)}</span>
      </div>

      {/* Title */}
      <h3 className="mb-1 font-semibold text-gray-900">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-sm text-gray-600 line-clamp-2">
        {blog.description}
      </p>

      {/* Category badges */}
      <div className="flex flex-wrap gap-2">
        {blog.category.map((cat) => {
          const cfg = categoryConfig[cat];
          return (
            <Badge
              key={cat}
              className={clsx(
                "rounded-full px-2 py-0.5 text-xs",
                cfg?.badge ?? "bg-gray-100 text-gray-700 hover:text-white"
              )}
            >
              {cat}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
