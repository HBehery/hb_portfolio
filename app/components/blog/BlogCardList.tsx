import BlogCard from "./BlogCard";

interface BlogPost {
  title: string;
  description: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
