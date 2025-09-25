import Image, { type StaticImageData } from "next/image";

export type BlogPost = {
  id: string;
  image: string | StaticImageData; // Next.js StaticImageData
  title: string;
  description: string;
  postURL: string;
  publishedAt?: string;
};

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const { image, title, description, postURL, publishedAt } = post;

  return (
    <article className="group bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400/50">
      <a
        href={postURL}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-xl"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* External Link Indicator */}
          <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          {publishedAt && (
            <time className="text-sm text-blue-400 font-medium mb-3 block">
              {new Date(publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>

          {/* Read More Button */}
          <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
            <span className="text-sm font-medium mr-2">Read More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </a>
    </article>
  );
}
