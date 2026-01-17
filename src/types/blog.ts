export interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

export interface BlogSection {
    type: "paragraph" | "heading" | "list" | "quote";
    content?: string;
    items?: string[];
}

export interface BlogAuthor {
    name: string;
    role: string;
    avatar: string;
}

