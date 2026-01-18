export default function BlogDetailSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6 h-64 w-full rounded bg-gray-200" />

      <div className="mb-4 h-4 w-32 rounded bg-gray-200" />
      <div className="mb-6 h-8 w-3/4 rounded bg-gray-200" />

      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-11/12 rounded bg-gray-200" />
        <div className="h-4 w-10/12 rounded bg-gray-200" />
      </div>
    </div>
  );
}
