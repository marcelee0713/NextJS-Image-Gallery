import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaGitlab } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="flex justify-center items-center gap-3 h-full -mt-20 md:flex-col">
      <Image
        src={"/me.jpg"}
        height={375}
        width={375}
        alt="Just Me."
        className="rounded-full"
      />
      <div className="flex flex-col gap-2 justify-start md:text-center">
        <div className="flex flex-col">
          <div className="font-bold text-2xl sm:text-xl">
            Welcome to Image Gallery!
          </div>
          <div className="font-normal text-base sm:text-14px">
            I made this because I am learning <strong>NextJS 13.4</strong> and
            <strong> Tailwind CSS</strong>.
          </div>
          <div className="font-normal text-base sm:text-14px">
            I learned a lot especially about this new
            <strong> App Router</strong>.
          </div>
        </div>

        <div className="flex justify-around gap-2">
          <a href="https://github.com/marcelee0713">
            <FaGithub
              size={40}
              className="text-slate-700 duration-300 ease-in-out hover:-translate-y-2"
            />
          </a>
          <a href="https://gitlab.com/marcelee0713">
            <FaGitlab
              size={40}
              className="text-slate-700 duration-300 ease-in-out hover:-translate-y-2"
            />
          </a>
          <a href="https://www.linkedin.com/in/marcel-magbual-48570a218/">
            <FaLinkedin
              size={40}
              className="text-slate-700 duration-300 ease-in-out hover:-translate-y-2"
            />
          </a>
          <a href="https://twitter.com/Marcelee13">
            <FaTwitter
              size={40}
              className="text-slate-700 duration-300 ease-in-out hover:-translate-y-2"
            />
          </a>
        </div>

        <div className="flex justify-center gap-1 mt-2 text-xs">
          Huge thanks to
          <a
            href="https://www.youtube.com/@codinginflow"
            className="text-slate-500 hover:underline"
          >
            Coding In Flow
          </a>
        </div>
      </div>
    </div>
  );
}
