import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FlipWords } from "./ui/FlipWords";
import { Button } from "./ui/button";
import { MoveUpLeft, MoveUpRight } from "lucide-react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col bg-zinc-950">
      <section className="w-[100%] lg:w-[90%] px-16 sm:px-0">
        <h1 className="text-2xl sm:text-4xl font-(family-name:--font-poppins) font-black text-zinc-300 text-center tracking-tight">
          Não encontramos essa tarefa...
          <br />
          <FlipWords
            className="text-zinc-300 text-start sm:text-center px-0"
            words={[
              "Pensa pelo lado positivo...",
              "Menos uma",
              "Isso é bom, né?",
            ]}
          />
        </h1>
        <p className="pt-3 sm:pt-8 text-[0.8rem] sm:text-[1rem] font-(family-name:--font-poppins) font-medium text-zinc-600 text-center">
          mas não se preocupe, vou te levar para um lugar seguro.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 justify-between w-[100%] sm:w-[80%] lg:w-[50%] mx-auto mt-8 sm:mt-16">
          <Button
            variant={"default"}
            className="flex items-center cursor-pointer border border-zinc-900 hover:bg-transparent group text-zinc-400 hover:text-zinc-300 relative"
          >
            <Link
              href={"/taskeeper"}
              className="absolute flex justify-center gap-2 items-center top-0 bottom-0 left-0 right-0"
            >
              <MoveUpLeft className="hidden sm:block" />
              <p>Ver todas as tarefas</p>
            </Link>
          </Button>
          <Button
            variant={"default"}
            className="flex items-center cursor-pointer border border-zinc-900 hover:bg-transparent group text-zinc-400 hover:text-zinc-300 relative"
          >
            <Link
              href={"/"}
              className="absolute flex justify-center gap-2 items-center top-0 bottom-0 left-0 right-0"
            >
              Cadastrar novas tarefas
              <MoveUpRight className="hidden sm:block" />
            </Link>
          </Button>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default PageNotFound;
