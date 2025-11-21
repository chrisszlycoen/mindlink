'use client';

export default function BloomingBackground() {
  return (
    <iframe
      src="/snowfall-animation/dist/index.html"
      className="fixed inset-0 w-full h-full -z-10 border-0 pointer-events-none"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="eager"
      title="Blooming Flowers Background"
    />
  );
}