"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUnsplash, FaHamburger } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  let [isPressed, setIsPressed] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header
        className={`flex gap-2 items-center bg-slate-700 sticky top-0 text-slate-100 py-4 sm:flex-col sm:items-stretch sm:duration-500 sm:ease-in ${
          isPressed ? `max-h-navHeight` : `max-h-20`
        }`}
      >
        <div className="flex sm:justify-between px-3">
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
          className={`flex gap-4 sm:gap-0 sm:flex-col ${
            isPressed && `sm:flex`
          }`}
        >
          <Link
            href={"/static"}
            className={`${!isPressed && `sm:pointer-events-none`}`}
          >
            <div
              className={`hover:bg-slate-600 ${
                pathname === "/static" && `bg-slate-600`
              } h-10 flex items-center px-3 transition-all sm:duration-1000 duration-500 rounded-md sm:rounded-none ${
                isPressed
                  ? `sm:opacity-100 sm:duration-500`
                  : `sm:duration-1000 sm:opacity-0`
              }`}
            >
              Static
            </div>{" "}
          </Link>

          <Link
            href={"/dynamic"}
            className={`${!isPressed && `sm:pointer-events-none`}`}
          >
            <div
              className={`hover:bg-slate-600 ${
                pathname === "/dynamic" && `bg-slate-600`
              } h-10 flex items-center px-3 transition-all sm:duration-700 duration-500 rounded-md sm:rounded-none ${
                isPressed
                  ? `sm:opacity-100 sm:duration-500`
                  : `sm:duration-700 sm:opacity-0`
              }`}
            >
              Dynamic
            </div>
          </Link>

          <Link
            href={"/isr"}
            className={`${!isPressed && `sm:pointer-events-none`}`}
          >
            <div
              className={`hover:bg-slate-600 ${
                pathname === "/isr" && `bg-slate-600`
              } h-10 flex items-center px-3 transition-all sm:duration-500 duration-500 rounded-md sm:rounded-none ${
                isPressed
                  ? `sm:opacity-100 sm:duration-500`
                  : `sm:duration-500 sm:opacity-0`
              }`}
            >
              ISR
            </div>
          </Link>

          <Link
            href={"/topics"}
            className={`${!isPressed && `sm:pointer-events-none`}`}
          >
            <div
              className={`hover:bg-slate-600 ${
                pathname === "/topics" && `bg-slate-600`
              } h-10 flex items-center px-3 transition-all sm:duration-300 duration-500 rounded-md sm:rounded-none ${
                isPressed
                  ? `sm:opacity-100 sm:duration-500`
                  : `sm:duration-300 sm:opacity-0`
              }`}
            >
              Topics
            </div>
          </Link>

          <Link
            href={"/search"}
            className={`${!isPressed && `sm:pointer-events-none`}`}
          >
            <div
              className={`hover:bg-slate-600 h-10 ${
                pathname === "/search" && `bg-slate-600`
              } flex items-center px-3 transition-all sm:duration-200 duration-500 rounded-md sm:rounded-none ${
                isPressed
                  ? `sm:opacity-100 sm:duration-500`
                  : `sm:duration-200 sm:opacity-0`
              }`}
            >
              Search
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
