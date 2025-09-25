import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <p>Hello Page</p>
      <Image
        src="/transparent-logo.webp"
        alt="Transparent E-Cell logo"
        width="200"
        height="200"
      />
    </div>
  );
}
