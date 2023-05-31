import NavigationBar from "./NavBar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Image Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen max-w-full" lang="en">
      <body className={`${roboto.className} bg-slate-100 h-screen max-w-full`}>
        <NavigationBar />
        <main className="flex flex-col p-3 h-full">{children}</main>
      </body>
    </html>
  );
}
