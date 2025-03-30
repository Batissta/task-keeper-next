"use client";
import React from "react";
import useMedia from "@/hooks/useMedia";
import Image from "next/image";

const HeaderLogo = () => {
  const mobile = useMedia("(width <= 800px)");

  return (
    <Image
      priority
      src={!mobile ? "/TaskeeperLogoDark.png" : "/logoIcon.png"}
      width={220}
      height={70}
      alt="Taskeeper Logo"
      className="h-[50px] w-auto lg:h-[70px]"
      sizes="15vw"
    />
  );
};

export default HeaderLogo;
