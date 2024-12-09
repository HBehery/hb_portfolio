import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function BlogCard({ title, description, slug }: BlogCardProps) {
  return (
    <div className="border dark:border-stone-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600  dark:text-gray-300 mb-4">{description}</p>
      <Link href={`/blog/${slug}`}>Read more &rarr;</Link>
    </div>
  );
}
