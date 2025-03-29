import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FlipWords } from "./ui/FlipWords";
import { Button } from "./ui/button";
import { Link, MoveUpLeft, MoveUpRight } from "lucide-react";

const PageNotFound = () => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col bg-zinc-950">
      <section className="w-[80%]">
        <h1 className="text-4xl font-(family-name:--font-poppins) font-black text-zinc-300 text-center tracking-tight">
          Não encontramos essa tarefa...
          <br />
          <FlipWords
            className="text-zinc-300 "
            words={[
              "Pensa pelo lado positivo...",
              "Menos uma",
              "Isso é bom, né?",
            ]}
          />
        </h1>
        <p className="pt-8 text-[1rem] font-(family-name:--font-poppins) font-medium text-zinc-600 text-center">
          mas não se preocupe, vou te levar para um lugar seguro.
        </p>
        <div className="grid grid-cols-2 gap-6 justify-between w-[40%] mx-auto mt-16">
          <Button
            variant={"default"}
            className="flex items-center cursor-pointer border border-zinc-900 hover:bg-transparent group text-zinc-400 hover:text-zinc-300 relative"
          >
            <Link
              href={"/taskeeper"}
              className="absolute flex justify-center gap-2 items-center top-0 bottom-0 left-0 right-0"
            >
              <MoveUpLeft />
              Ver todas as tarefas
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
              <MoveUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default PageNotFound;
