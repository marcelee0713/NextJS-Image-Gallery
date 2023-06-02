"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUnsplash, FaHamburger, FaCaretDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  let [isPressed, setIsPressed] = useState(false);
  let [topicIsPressed, setTopicIsPressed] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header
        className={`z-10 flex gap-2 items-center bg-slate-700 sticky top-0 text-slate-100 py-4 sm:flex-col sm:items-stretch sm:duration-500 sm:ease-in ${
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

          <div
            onClick={() => setTopicIsPressed(topicIsPressed ? false : true)}
            className={`h-10 relative sm:gap-2 flex sm:flex-row sm:px-3 transition-all sm:duration-300 duration-500 ${
              isPressed
                ? `sm:opacity-100 sm:duration-500`
                : `sm:duration-500 sm:opacity-0`
            } ${topicIsPressed ? `relative` : `static`}`}
          >
            <div className="flex gap-2 items-center justify-center">
              <div>Topics</div>
              <div
                className={`transition-all duration-300 ${
                  topicIsPressed ? `-rotate-90` : `rotate-0`
                }`}
              >
                <FaCaretDown size={15} />
              </div>
            </div>

            <div
              className={`flex flex-col absolute top-10 sm:top-0 sm:flex-row sm:left-24 transition-all duration-500 opacity-0 bg-slate-800 rounded ${
                topicIsPressed ? `opacity-100` : `opacity-0`
              }`}
            >
              <Link
                href={"/topics/health"}
                className={`${!isPressed && `sm:pointer-events-none`} ${
                  !topicIsPressed && `pointer-events-none`
                }`}
              >
                <div
                  className={`hover:bg-slate-600 ${
                    pathname === "/topics/health" && `bg-slate-600`
                  } h-10 flex items-center px-3 transition-all sm:duration-500 duration-500 ${
                    isPressed
                      ? `sm:opacity-100 sm:duration-500`
                      : `sm:duration-500 sm:opacity-0`
                  }`}
                >
                  Health
                </div>
              </Link>

              <Link
                href={"/topics/fitness"}
                className={`${!isPressed && `sm:pointer-events-none`} ${
                  !topicIsPressed && `pointer-events-none`
                }`}
              >
                <div
                  className={`hover:bg-slate-600 ${
                    pathname === "/topics/fitness" && `bg-slate-600`
                  } h-10 flex items-center px-3 transition-all sm:duration-500 duration-500 ${
                    isPressed
                      ? `sm:opacity-100 sm:duration-500`
                      : `sm:duration-500 sm:opacity-0`
                  }`}
                >
                  Fitness
                </div>
              </Link>

              <Link
                href={"/topics/coding"}
                className={`${!isPressed && `sm:pointer-events-none`} ${
                  !topicIsPressed && `pointer-events-none`
                }`}
              >
                <div
                  className={`hover:bg-slate-600 ${
                    pathname === "/topics/coding" && `bg-slate-600`
                  } h-10 flex items-center px-3 transition-all sm:duration-500 duration-500 ${
                    isPressed
                      ? `sm:opacity-100 sm:duration-500`
                      : `sm:duration-500 sm:opacity-0`
                  }`}
                >
                  Coding
                </div>
              </Link>
            </div>
          </div>

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
