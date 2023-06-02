import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Image Gallery | Dynamic Picture",
};

// This one makes it dynamic because it revalidates it for 0 seconds.
// Meaning that it would change it every time the page has been refreshed
export const revalidate = 0;

export default async function DynamicPage() {
  //prettier-ignore
  const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, {
    /*
    They do the same thing as the (revalidate = 0;)
    next: {
      revalidate: 0
    },
    cache: "no-cache"
    */
  });
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="min-w-fit max-w-sm bg-slate-500 text-slate-100 sm:text-xs py-2 px-3 shadow-lg rounded">
          This page
          <strong> fetches data dynamically</strong> and every time you refresh
          the page, you get a new image from Unsplash.
        </div>
        <Image
          src={image.urls.raw}
          alt={image.description}
          width={width}
          height={height}
          className="shadow-lg rounded"
        ></Image>
        <div className="w-fit text-sm flex gap-1">
          by
          <Link
            href={`/users/${image.user.username}`}
            className="font-bold hover:underline hover:text-slate-700"
          >
            {image.user.username}
          </Link>
        </div>
      </div>
    </>
  );
}
