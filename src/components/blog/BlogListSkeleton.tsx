export default function BlogListSkeleton() {
  return (
    <div className="space-y-4 pr-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border bg-white p-4"
        >
          <div className="mb-3 h-3 w-24 rounded bg-gray-200" />
          <div className="mb-2 h-4 w-full rounded bg-gray-200" />
          <div className="mb-1 h-3 w-5/6 rounded bg-gray-200" />
          <div className="h-3 w-4/6 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
