import { useState } from "react";
import BlogList from "@/components/blog/BlogList";
import BlogDetail from "@/components/blog/BlogDetail";

export default function Home() {

  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  return (
    <div className="grid w-full grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12">
      
      {/* LEFT PANEL */}
      <aside className="md:col-span-4">
        <h2 className="mb-4 text-sm font-semibold text-gray-700">
          Latest Articles
        </h2>

        <BlogList
          selectedId={selectedBlog}
          onSelect={setSelectedBlog}
        />
      </aside>

      {/* RIGHT PANEL */}
      <section className="md:col-span-8">
        {selectedBlog ? (
          <BlogDetail blogId={selectedBlog} />
        ) : (
          <div className="flex h-full min-h-[300px] items-center justify-center text-gray-500">
            Select an article to read
          </div>
        )}
      </section>

    </div>
  );
}
