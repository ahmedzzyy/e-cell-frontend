type PlaceholderAvatarProps = {
  name: string;
  className?: string;
};

export default function PlaceholderAvatar({
  name,
  className = "",
}: PlaceholderAvatarProps) {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent color based on name
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-teal-500",
  ];

  const colorIndex = name.length % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={`${bgColor} flex items-center justify-center text-white font-bold text-2xl ${className}`}
    >
      {initials}
    </div>
  );
}
