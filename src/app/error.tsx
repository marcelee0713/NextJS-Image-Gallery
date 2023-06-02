"use client";

import { BiErrorCircle } from "react-icons/bi";

type Error = {
  error: Error;
  callback: () => void;
};

export default async function Error({ error, callback }: Error) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <BiErrorCircle size={50} className="text-red-500" />
      <p className="text-center">Something went wrong, please try again.</p>
    </div>
  );
}
