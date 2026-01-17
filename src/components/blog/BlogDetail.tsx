import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/blogApi";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp, MessageSquare } from "lucide-react";

export default function BlogDetail({ blogId }: { blogId: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
  });

  if (isLoading) {
    return <p className="p-6 text-gray-500">Loading article…</p>;
  }

  if (isError || !data) {
    return <p className="p-6 text-red-500">Article not found</p>;
  }

  const paragraphs = data.content.split("\n\n");

  return (
    <article className="mx-auto w-full max-w-4xl rounded-xl bg-white p-6 shadow-sm">
      {/* Cover Image */}
      <img
        src={data.coverImage}
        alt={data.title}
        className="h-[260px] w-full rounded-xl object-cover"
      />

      {/* Meta */}
      <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
        <span className="font-semibold uppercase text-indigo-600">
          {data.category[0]}
        </span>
        <span>•</span>
        <span>5 min read</span>
      </div>

      {/* Title */}
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        {data.title}
      </h1>

      {/* Share */}
      <Button className="mt-4 flex gap-2 bg-indigo-600 hover:bg-indigo-700">
        <Share2 size={16} />
        Share Article
      </Button>

      {/* Info Cards */}
      <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg border bg-gray-50 p-4 text-center text-sm">
        <div>
          <p className="text-xs text-gray-500">CATEGORY</p>
          <p className="font-medium">{data.category.join(", ")}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">READ TIME</p>
          <p className="font-medium">5 mins</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">DATE</p>
          <p className="font-medium">
            {new Date(data.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="mt-8 space-y-6 leading-relaxed text-gray-700">
        {paragraphs.map((para: string, idx: number) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="mt-8 flex justify-end gap-6 text-gray-500">
        <ThumbsUp className="cursor-pointer hover:text-indigo-600" />
        <MessageSquare className="cursor-pointer hover:text-indigo-600" />
      </div>
    </article>
  );
}
