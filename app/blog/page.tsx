import BlogList from "../components/blog/BlogCardList";

const posts = [
  {
    title: "Pinned Post",
    description: "This is the pinned post.",
    slug: "pinned-post",
    imageSrc: "/blog_assets/post_1.png",
    imageAlt: "Pinned post image",
    isPinned: true,
  },
  {
    title: "Next.js Tips",
    description: "Learn how to optimize Next.js apps.",
    slug: "nextjs-tips",
    imageSrc: "/images/nextjs-tips.jpg",
  },
  {
    title: "TailwindCSS Tricks",
    description: "Boost your styling with Tailwind.",
    slug: "tailwindcss-tricks",
    imageSrc: "/images/tailwindcss-tricks.jpg",
  },
  {
    title: "First Post",
    description: "Introduction to my blog.",
    slug: "first-post",
    imageSrc: "/images/first-post.jpg",
  },
];

export default function BlogPage() {
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
