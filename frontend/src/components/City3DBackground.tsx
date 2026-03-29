// src/components/City3DBackground.tsx
'use client';

export default function City3DBackground() {
  return (
    <iframe
      src="/city-3d/dist/index.html"
      className="fixed inset-0 w-full h-full -z-10 border-0 pointer-events-none"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="eager"
      title="CITY-3D Background"
    />
  );
}