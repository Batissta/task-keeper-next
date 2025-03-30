"use client";
import { BadgePlus, Files, UserSearch } from "lucide-react";
import Link from "next/link";
import React from "react";

enum ePaths {
  home = "/",
  taskeeper = "/taskeeper",
  conheca = "/author",
}

const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex gap-4 items-center text-zinc-600 uppercase">
        <Link
          href={ePaths.home}
          className={`bg-zinc-800 rounded-2xl hover:bg-transparent md:bg-transparent group px-4 py-2 md:hover:bg-zinc-800 hover:rounded-2xl duration-150`}
        >
          <li className="flex gap-2 group-hover:text-zinc-500 duration-150 text-[.875rem] items-center">
            <BadgePlus />
            Cadastre
          </li>
        </Link>
        <Link
          href={ePaths.taskeeper}
          className={`bg-zinc-800 rounded-2xl hover:bg-transparent md:bg-transparent group px-4 py-2 md:hover:bg-zinc-800 hover:rounded-2xl duration-150`}
        >
          <li className="flex gap-2 group-hover:text-zinc-500 duration-150 text-[.875rem] items-center">
            <Files />
            Seus arquivos
          </li>
        </Link>
        <Link
          href={ePaths.conheca}
          className={`bg-zinc-800 rounded-2xl hover:bg-transparent md:bg-transparent group px-4 py-2 md:hover:bg-zinc-800 hover:rounded-2xl duration-150`}
        >
          <li className="flex gap-2 group-hover:text-zinc-500 duration-150 text-[.875rem] items-center">
            <UserSearch />
            Conheça o autor
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default HeaderNav;
