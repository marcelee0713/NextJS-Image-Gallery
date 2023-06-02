import { UnsplashUser } from "@/models/unsplash-user";
import { FaUser } from "react-icons/fa";

import { notFound } from "next/navigation";

interface PageProps {
  params: {
    username: string;
  };
}

async function getUser(username: String): Promise<UnsplashUser> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  if (response.status == 404) notFound();

  return await response.json();
}

export async function generateMetadata({ params: { username } }: PageProps) {
  const user = await getUser(username);
  return {
    title:
      [user.first_name, user.last_name].filter(Boolean).join(" ") ||
      `Image Gallery | ${user.username}`,
  };
}

export default async function Page({ params: { username } }: PageProps) {
  const user = await getUser(username);

  return (
    <div className="flex flex-col gap-2 h-full items-center justify-center">
      <div className="bg-slate-700 p-10 rounded-full">
        <FaUser size={150} className="text-slate-500" />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold text-xl">{user.username}</h1>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <a
          className="hover:underline text-slate-700"
          href={`https://unsplash.com/${user.username}`}
        >
          Unsplash Profile
        </a>
      </div>
    </div>
  );
}
