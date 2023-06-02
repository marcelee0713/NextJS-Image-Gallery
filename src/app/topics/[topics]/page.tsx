import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";

// If you don't want to cache them. Do uncomment this code below
// eport const revalidate = 0;

// If you only want the pages that are included in the generateStaticParams to be searched in topics
// Uncomment this code below
// export const dynamicParams = false;

interface PageProps {
  params: { topics: string };
}

export function generateMetadata({ params: { topics } }: PageProps) {
  return {
    title: `Image Gallery | ${topics}`,
  };
}

// This will generate at build time. What I mean is that it will fetch the data at build time
export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

export default async function TopicsPage({ params: { topics } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topics}&count=30&orientation=landscape&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <>
      <div className="min-w-fit max-w-sm bg-slate-500 text-slate-100 sm:text-xs py-2 px-3 shadow-lg rounded">
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even though the URL has a dynamic parameter.
        Pages that are not included in the generateStaticParams will be fetched
        and rendered on first access and then{" "}
        <strong>cached for subsequent requests</strong>. This can be disabled
      </div>
      <div className="text-xl font-bold">{topics}</div>
      <div className="grid grid-cols-4 h-screen gap-3 sm:grid-cols-2">
        {images.map((image) => (
          <>
            <div className="relative w-full h-96">
              <Image
                src={image.urls.raw}
                alt={image.description}
                key={image.urls.raw}
                fill
                className="w-full h-full object-cover m-1 rounded-md"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
