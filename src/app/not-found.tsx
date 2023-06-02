import { GiShrug } from "react-icons/gi";

// Will overrride the default next js 404 error
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <GiShrug size={50} className="text-slate-700" />
        <p className="text-center">Error 404</p>
      </div>
    </>
  );
}
