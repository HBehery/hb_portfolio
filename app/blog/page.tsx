import BlogList from "../components/blog/BlogCardList";

interface BlogPost {
  title: string;
  description: string;
  slug: string;
}

// Example data. Replace this with dynamic content later.
const posts: BlogPost[] = [
  {
    title: "First Post",
    description: "Introduction to my blog.",
    slug: "first-post",
  },
  {
    title: "Next.js Tips",
    description: "Learn how to optimize Next.js apps.",
    slug: "nextjs-tips",
  },
  {
    title: "TailwindCSS Tricks",
    description: "Boost your styling with Tailwind.",
    slug: "tailwindcss-tricks",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto p-6 text-gray-700 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}
