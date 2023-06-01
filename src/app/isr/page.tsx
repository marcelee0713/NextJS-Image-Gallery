import { UnsplashImage } from "@/models/unplash-image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Image Gallery | Incremental Static Regeneration",
};

// This one makes it also dynamic because it revalidates or change the picture after 15 seconds.
// Of course it will still cache it, but after 15 seconds it will get a new picture then
// the process repeats.
export const revalidate = 15;

export default async function ISRPage() {
  //prettier-ignore
  const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY, {
    /*
    They do the same thing as the (revalidate = 15;)
    next: {
      revalidate: 15
    },
    */
  });
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="min-w-fit max-w-sm bg-slate-500 text-slate-100 sm:text-xs py-2 px-3 shadow-lg rounded">
          This page uses
          <strong> incremental static regeneration</strong>. Meaning that it
          will cache the image for 15 seconds. After that it will re-fetch
          another image if you ever refresh the page.
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
