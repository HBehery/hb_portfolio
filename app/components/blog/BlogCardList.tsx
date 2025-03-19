import BlogCard from "./BlogCard";

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt?: string;
  isPinned?: boolean;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const pinnedPost = posts.find((post) => post.isPinned);
  const otherPosts = posts.filter((post) => !post.isPinned);

  return (
    <div className="container mx-auto p-6">
      {/* Pinned Post */}
      {pinnedPost && (
        <div className="mb-8">
          <div className="w-full">
            <BlogCard
              title={pinnedPost.title}
              description={pinnedPost.description}
              slug={pinnedPost.slug}
              imageSrc={pinnedPost.imageSrc}
              imageAlt={pinnedPost.imageAlt}
              large
            />
          </div>
        </div>
      )}

      {/* Other Posts */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {otherPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            slug={post.slug}
            imageSrc={post.imageSrc}
            imageAlt={post.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
