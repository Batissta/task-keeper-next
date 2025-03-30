import Image from "next/image";
import React from "react";
import HeaderNav from "./HeaderNav";

const Header = async () => {
  return (
    <header className="px-8 py-2 border border-transparent border-b-zinc-800 z-99 w-full bg-zinc-900 flex items-center font-(family-name:--font-poppins) gap-8 justify-between">
      <Image
        priority
        src={"/TaskeeperLogoDark.png"}
        width={220}
        height={220}
        alt="Taskeeper Logo"
        className="w-[100px] md:w-[150px] lg:w-[220px]"
        sizes="15vw"
      />
      <HeaderNav />
    </header>
  );
};

export default Header;
