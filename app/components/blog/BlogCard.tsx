import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt?: string;
  large?: boolean; // New prop for larger card
}

export default function BlogCard({
  title,
  description,
  slug,
  imageSrc,
  imageAlt,
  large,
}: BlogCardProps) {
  return (
    <div
      className={`border dark:border-stone-800 rounded-lg shadow-lg hover:shadow-xl transition-all ${
        large ? "p-8 md:flex md:gap-6 md:items-center" : "p-4"
      }`}
    >
      {/* Blog Image */}
      <div className={`${large ? "w-full md:w-1/2" : "mb-4"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt || `${title} image`}
          width={large ? 1200 : 800}
          height={large ? 600 : 400}
          className={`rounded-lg object-cover ${large ? "h-auto w-full" : ""}`}
        />
      </div>
      {/* Blog Content */}
      <div className={`${large ? "md:w-1/2" : ""}`}>
        <h2 className={`text-${large ? "4xl" : "2xl"} font-bold mb-2`}>
          {title}
        </h2>
        <p
          className={`text-gray-600 dark:text-gray-300 mb-4 ${
            large ? "text-lg" : ""
          }`}
        >
          {description}
        </p>
        <Link
          className="text-blue-500 hover:text-blue-700 font-semibold"
          href={`/blog/${slug}`}
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
}
