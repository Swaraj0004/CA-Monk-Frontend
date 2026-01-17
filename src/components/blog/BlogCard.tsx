import { Blog } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { categoryConfig } from "./categoryConfig";

export default function BlogCard({
  blog,
  isActive,
  onClick,
}: {
  blog: Blog;
  isActive: boolean;
  onClick: (id: string) => void; 
}) {
  const category = blog.category[0];
  const config = categoryConfig[category];
  const Icon = config?.icon;

  return (
    <div
      onClick={() => onClick(blog.id)} 
      className={clsx(
        "relative cursor-pointer rounded-xl border bg-white p-4 transition",
        isActive
          ? "border-purple-500 shadow-md"
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
          {Icon && <Icon size={14} className={config.color} />}
          <span>{category}</span>
        </div>
        <span>2 days ago</span>
      </div>

      {/* Title */}
      <h3 className="mb-1 font-semibold text-gray-900">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-sm text-gray-600 line-clamp-2">
        {blog.description}
      </p>

      {/* Badge */}
      <Badge
        className={clsx(
          "rounded-full px-2 py-0.5 text-xs",
          config?.badge ?? "bg-gray-100 text-gray-700"
        )}
      >
        {category}
      </Badge>
    </div>
  );
}
