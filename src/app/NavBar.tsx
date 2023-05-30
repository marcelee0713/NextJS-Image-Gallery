"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUnsplash, FaHamburger } from "react-icons/fa";

export default function NavigationBar() {
  let [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <header className="flex gap-4 items-center bg-slate-700 text-slate-100 py-4 px-3 sm:flex-col sm:items-stretch">
        <div className="flex sm:justify-between">
          <Link href={"/"}>
            <div className="font-bold text-xl">Image Gallery</div>
            <div className="flex gap-1 items-center">
              <div className="text-sm">Powered by</div>
              <FaUnsplash size={16} />
              <div className="text-xs">Unsplash</div>
            </div>
          </Link>

          <FaHamburger
            className={`hidden sm:block sm:cursor-pointer transition-transform ${
              isPressed ? `-rotate-45` : `rotate-0`
            }`}
            size={40}
            onClick={() => setIsPressed(isPressed ? false : true)}
          />
        </div>

        <div
          className={`flex gap-4 sm:flex-col ${
            isPressed ? `sm:flex` : `sm:hidden`
          }`}
        >
          <div className="w-fit hover:text-slate-400 cursor-pointer">
            Static
          </div>
          <div className="w-fit hover:text-slate-400 cursor-pointer">
            Dynamic
          </div>
          <div className="w-fit hover:text-slate-400 cursor-pointer">ISR</div>
          <div className="w-fit hover:text-slate-400 cursor-pointer">
            Topics
          </div>
          <div className="w-fit hover:text-slate-400 cursor-pointer">
            Search
          </div>
        </div>
      </header>
    </>
  );
}
