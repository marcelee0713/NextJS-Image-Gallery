import SearchPage from "./search_page";

// "use client";
// You can not use "metadata" since it is a server side component
// But you since Page() is only the one we need to be on the Client side
// So we have to make a function out of it.

export const metadata = {
  title: "Image Gallery | Search",
};

export default async function Page() {
  return <SearchPage />;
}
