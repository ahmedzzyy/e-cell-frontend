type InitiativeCardProps = {
  heading: string;
  description: string;
  isEnabled?: boolean;
  link?: string;
  className?: string;
};

export default function InitiativeCard({
  heading,
  description,
  isEnabled = true,
  link,
  className = "",
}: InitiativeCardProps) {
  const cardContent = (
    <div
      className={`
        group relative overflow-hidden
        bg-gradient-to-br from-slate-800/80 to-blue-900/80 
        backdrop-blur-sm border border-slate-600/30
        p-6 sm:p-8 rounded-2xl 
        flex flex-col h-full w-full max-w-xl mx-auto
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:border-blue-400/50 hover:scale-[1.02]
        ${isEnabled ? "cursor-pointer" : "opacity-60 cursor-not-allowed"}
        ${className}
      `}
      role={link ? "button" : undefined}
      tabIndex={link && isEnabled ? 0 : undefined}
      aria-label={link ? `Learn more about ${heading}` : undefined}
    >
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
          {heading}
        </h3>
        <p className="text-slate-300 mb-4 flex-grow text-left leading-relaxed group-hover:text-slate-200 transition-colors">
          {description}
        </p>

        {/* Status Indicator */}
        {!isEnabled && (
          <div className="flex items-center gap-2 mt-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm text-amber-300">Coming Soon</span>
          </div>
        )}

        {/* Link Indicator */}
        {link && isEnabled && (
          <div className="flex items-center gap-2 mt-4 text-blue-300 group-hover:text-blue-200 transition-colors">
            <span className="text-sm font-medium">Learn More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  // Wrap with Link if enabled and link provided
  if (link && isEnabled) {
    return (
      <a
        href={link}
        className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-2xl"
        target={link.startsWith("http") ? "_blank" : "_self"}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

// Alternative simplified version if you don't need the extra features
export function SimpleInitiativeCard({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-sm border border-slate-600/30 p-6 sm:p-8 rounded-2xl flex flex-col h-full w-full max-w-xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
        {heading}
      </h3>
      <p className="text-slate-300 mb-4 flex-grow text-left leading-relaxed">
        {description}
      </p>
    </div>
  );
}
