import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/services/blogApi";
import { Button } from "@/components/ui/button";

const CATEGORY_OPTIONS = [
  "FINANCE",
  "CAREER",
  "TECH",
  "EDUCATION",
  "REGULATIONS",
  "LIFESTYLE",
];

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    coverImage: "",
    categories: [] as string[],
  });

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setForm({
        title: "",
        description: "",
        content: "",
        coverImage: "",
        categories: [],
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      title: form.title,
      description: form.description,
      content: form.content,
      coverImage: form.coverImage,
      category: form.categories.length
        ? form.categories
        : ["FINANCE"],
      date: new Date().toISOString(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-4 rounded-xl border bg-white p-4"
    >
      <h3 className="font-semibold">Create New Blog</h3>

      <input
        className="w-full rounded border px-3 py-2"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        required
      />

      <input
        className="w-full rounded border px-3 py-2"
        placeholder="Cover Image URL"
        value={form.coverImage}
        onChange={(e) =>
          setForm({ ...form, coverImage: e.target.value })
        }
        required
      />

      <textarea
        className="w-full rounded border px-3 py-2 resize-none"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        required
      />

      <textarea
        className="w-full rounded border px-3 py-2 resize-none"
        placeholder="Content"
        rows={4}
        value={form.content}
        onChange={(e) =>
          setForm({ ...form, content: e.target.value })
        }
        required
      />

      {/* CATEGORY SELECTOR */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">
          Categories
        </p>
        <div className="flex flex-wrap gap-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                checked={form.categories.includes(cat)}
                onChange={(e) => {
                  setForm((prev) => ({
                    ...prev,
                    categories: e.target.checked
                      ? [...prev.categories, cat]
                      : prev.categories.filter((c) => c !== cat),
                  }));
                }}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        disabled={mutation.isPending}
        className="bg-indigo-600 hover:bg-indigo-700"
      >
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </Button>

      {mutation.isError && (
        <p className="text-sm text-red-500">
          Failed to create blog
        </p>
      )}
    </form>
  );
}
