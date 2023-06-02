"use client";

import { UnsplashImage } from "@/models/unsplash-image";
import { FormEvent, useState } from "react";
import Image from "next/image";
import Loading from "../loading";
import { BiErrorCircle } from "react-icons/bi";
import { GiShrug } from "react-icons/gi";

export default function SearchPage() {
  // I know there is a lot of stuff
  // But in the future please use Vercel's SWR
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);

        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await response.json();
        setSearchResults(images);
      } catch (e) {
        console.error(e);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    setScrollPos(scrolled);
  });

  return (
    <div className="flex flex-col h-full gap-5">
      <div className="min-w-fit max-w-sm bg-slate-500 text-slate-100 sm:text-xs py-2 px-3 shadow-lg rounded">
        This page fetches data <strong>client-side.</strong> In order to not
        leak API credentials, the request is sent to a NextJS{" "}
        <strong>route handler</strong> that runs on the server. This route
        handler then fetches the data from the Unsplash API and returns it to
        the client.
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>Search query</label>
        <input
          name="query"
          type="text"
          placeholder="What's on your mind?"
          className={`sm:z-10 outline-slate-500 sm:z-9 p-2 shadow rounded-md placeholder:font-normal placeholder:italic sm:transition-opacity sm:duration-300 ${
            scrollPos > 124 ? "sm:opacity-0 sm:z-9" : "sm:opacity-100 sm:z-10"
          }`}
        ></input>
        <button
          type="submit"
          disabled={searchResultsLoading}
          className={`sm:z-10 self-end bg-slate-100 w-20 py-2 px-4 text-slate-700 rounded shadow border border-slate-400 hover:bg-slate-700 hover:text-slate-100 sm:transition-opacity sm:duration-300 ${
            scrollPos > 180 ? "sm:opacity-0 sm:z-9" : "sm:opacity-100 sm:z-10"
          }`}
        >
          Search
        </button>
      </form>

      {searchResultsLoading && (
        <div className="grid grid-cols-4 h-screen gap-3 sm:grid-cols-2">
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
          <div className="relative w-full h-96">
            <div className="bg-slate-500 animate-pulse w-full h-full object-cover m-1 rounded-md"></div>
          </div>
        </div>
      )}
      {searchResultsLoadingIsError && (
        <div className="flex flex-col gap-2 items-center justify-center">
          <BiErrorCircle size={50} className="text-red-500" />
          <p className="text-center">Something went wrong, please try again.</p>
        </div>
      )}
      {searchResults?.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center">
          <GiShrug size={50} className="text-slate-700" />
          <p className="text-center">None existent. Try a different query?</p>
        </div>
      )}

      {searchResults && (
        <>
          <div className="grid grid-cols-4 h-screen gap-3 sm:grid-cols-2">
            {searchResults.map((image) => (
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
      )}
    </div>
  );
}
