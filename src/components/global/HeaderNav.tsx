"use client";
import { BadgePlus, Files, Fingerprint } from "lucide-react";
import Link from "next/link";
import React from "react";
import useMedia from "@/hooks/useMedia";
import HeaderNavMobile from "./HeaderNavMobile";

enum ePaths {
  home = "/",
  taskeeper = "/taskeeper",
  conheca = "/author",
}

const HeaderNav = () => {
  const mobile = useMedia("(width <= 842px)");
  if (!mobile)
    return (
      <nav>
        <ul className="flex gap-4 items-center text-zinc-200 uppercase">
          <Link
            href={ePaths.home}
            className={`rounded-2xl group px-4 py-2 hover:bg-zinc-800 hover:rounded-2xl duration-150`}
          >
            <li className="flex gap-2 group-hover:text-zinc-400 duration-150 text-[.875rem] items-center">
              <BadgePlus />
              Cadastre
            </li>
          </Link>
          <Link
            href={ePaths.taskeeper}
            className={`rounded-2xl group px-4 py-2 hover:bg-zinc-800 hover:rounded-2xl duration-150`}
          >
            <li className="flex gap-2 group-hover:text-zinc-400 duration-150 text-[.875rem] items-center">
              <Files />
              Seus arquivos
            </li>
          </Link>
          <Link
            href={ePaths.conheca}
            className={`rounded-2xl group px-4 py-2 hover:bg-zinc-800 hover:rounded-2xl duration-150`}
          >
            <li className="flex gap-2 group-hover:text-zinc-400 duration-150 text-[.875rem] items-center">
              <Fingerprint />
              Conheça o autor
            </li>
          </Link>
        </ul>
      </nav>
    );
  return <HeaderNavMobile />;
};

export default HeaderNav;
