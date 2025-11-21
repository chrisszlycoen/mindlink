// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <iframe
        src="/city-3d/dist/index.html"
        className="w-full h-full border-0"
        allowFullScreen
        loading="eager"
      />
    </main>
  );
}