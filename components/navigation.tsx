import { ChatAltIcon } from "@heroicons/react/solid";
import Link from "next/link";
import useOnScrolled from "../hooks/useOnScrolled";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const navigation = () => {
  const scrolled = useOnScrolled();
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <nav className="flex justify-between items-center m-auto max-w-7xl h-16 z-50">
      <button
        className={`logo text-3xl font-Poppins tracking-wider cursor-pointer px-4 py-1 -ml-40 hover:text-sky-500 rounded-md duration-200 opacity-0 ${
          scrolled && "opacity-100 ml-0"
        }`}
      >
        Tato
      </button>
      <ul
        className={`hidden md:flex gap-4 text-lg duration-500 translate-x-20 ${
          scrolled && " -translate-x-1"
        }`}
      >
        <li className="text-gray-400 px-3 py-2 cursor-pointer border-b-2 border-transparent hover:border-sky-500 duration-150">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-3 py-2 cursor-pointer border-b-2 border-transparent hover:border-sky-500 duration-150">
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
        </li>
        <li className="px-3 py-2 cursor-pointer border-b-2 border-transparent hover:border-sky-500 duration-150">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li
          className={`group cursor-pointer opacity-0 px-6 py-2 rounded-md bg-sky-600 hover:text-sky-700 hover:bg-white duration-300 ${
            scrolled && "opacity-100"
          }`}
        >
          <Link href="/contact">
            <a>
              <ChatAltIcon className="w-6 h-6 inline-block mr-2 group-hover:-rotate-[25deg] group-hover:scale-150 duration-300" />
              Contact me
            </a>
          </Link>
        </li>
      </ul>
      <div className="absolute right-1 top-1 block md:hidden">
        <a onClick={() => setMenuOpened(!menuOpened)}>
          {menuOpened ? (
            <XIcon className="w-14 h-14 p-2 cursor-pointer hover:bg-zinc-400 active:bg-zinc-400"></XIcon>
          ) : (
            <MenuIcon className="w-14 h-14 p-2 cursor-pointer hover:bg-zinc-400 active:bg-zinc-400"></MenuIcon>
          )}
        </a>
      </div>
      {menuOpened && (
        <div className="fixed top-16 left-0 w-full h-full bg-zinc-800 z-50 pb-16">
          <ul className="flex flex-col items-center justify-center h-full">
            <li className=" w-full h-20 text-center hover:bg-zinc-500 active:bg-zinc-500 flex justify-center items-center text-4xl">
              <Link href="/">
                <a onClick={() => setMenuOpened(false)}>Home</a>
              </Link>
            </li>
            <li className=" w-full h-20 text-center hover:bg-zinc-500 active:bg-zinc-500 flex justify-center items-center text-4xl">
              <Link href="/blogs">
                <a>Blog</a>
              </Link>
            </li>
            <li className=" w-full h-20 text-center hover:bg-zinc-500 active:bg-zinc-500 flex justify-center items-center text-4xl">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className=" w-full h-20 text-center hover:bg-zinc-500 active:bg-zinc-500 flex justify-center items-center text-4xl">
              <Link href="/contact">
                <a>Contact me</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default navigation;
