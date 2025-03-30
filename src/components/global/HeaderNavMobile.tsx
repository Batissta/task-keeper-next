import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { BadgePlus, Ellipsis, Files, Fingerprint, X } from "lucide-react";
import Link from "next/link";

const HeaderNavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="text-zinc-300 bg-zinc-800 p-2 rounded cursor-pointer"
      >
        <Button variant={"default"}>
          <Ellipsis />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-zinc-900 font-(family-name:--font-poppins) border-l-zinc-600">
        <SheetHeader>
          <SheetTitle className="text-2xl text-zinc-300">
            Navegue pela plataforma!
          </SheetTitle>
          <SheetDescription className="text-[.875rem]">
            Aqui você pode navegar para todas as seções do site através de seu
            celular!
          </SheetDescription>
        </SheetHeader>
        <nav className="px-4">
          <ul className="text-zinc-200 text-[.875rem] flex flex-col gap-3">
            <Link
              href={"/"}
              className="border border-transparent border-b-zinc-600 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <BadgePlus />
                Cadastre seus planejamentos
              </li>
            </Link>
            <Link
              href={"/"}
              className="border border-transparent border-b-zinc-600 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <Files />
                Acesse seus arquivos
              </li>
            </Link>
            <Link
              href={"/"}
              className="border border-transparent border-b-zinc-600 py-3"
            >
              <li className="flex gap-3 items-center w-[80%] justify-start">
                <Fingerprint />
                Saiba mais sobre o autor
              </li>
            </Link>
          </ul>
        </nav>

        <SheetFooter>
          <SheetClose
            asChild
            className="w-fit mx-auto rounded-[50%] bg-zinc-800"
          >
            <Button className="cursor-pointer">
              <X className="text-zinc-300" />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderNavMobile;
