import { notFound } from "next/navigation";

interface PostData {
  title: string;
  content: string;
}

const posts: Record<string, PostData> = {
  "first-post": {
    title: "First Post",
    content: "Welcome to my first blog post!",
  },
  "nextjs-tips": {
    title: "Next.js Tips",
    content: "Optimize Next.js apps like a pro.",
  },
  "tailwindcss-tricks": {
    title: "TailwindCSS Tricks",
    content: "Master TailwindCSS styling.",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <div className="container mx-auto p-6 text-gray-700 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="leading-loose">{post.content}</div>
    </div>
  );
}
