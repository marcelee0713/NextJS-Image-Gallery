import { FaUnsplash } from "react-icons/fa";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full -mt-20">
      <div className="bg-slate-700 h-40 w-40 gap-4 flex flex-col items-center justify-center rounded-xl shadow-xl">
        <FaUnsplash className="animate-spin text-slate-100" size={50} />
        <div className="font-bold text-slate-100">Loading...</div>
      </div>
    </div>
  );
}
