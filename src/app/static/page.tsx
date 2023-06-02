import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Image Gallery | Static Picture",
};

export default async function StaticPage() {
  //prettier-ignore
  const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="min-w-fit max-w-sm bg-slate-500 text-slate-100 sm:text-xs py-2 px-3 shadow-lg rounded">
          This page <strong>fetches and caches data at build time</strong>. Even
          though Unplash API always returns a new image, we see the same image
          after refreshing the page until we compile the project again.
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
