import Loading from "@/components/Loading";
import TasksList from "@/components/TasksList";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

const Taskeeper = () => {
  return (
    <main className="bg-zinc-800 min-h-screen font-(family-name:--font-poppins) px-16 py-12">
      <div className="flex flex-col">
        <h1 className="text-zinc-300 text-4xl font-black tracking-tight">
          Suas Tarefas ficam por aqui.
        </h1>
        <Link
          href={"/"}
          className="text-zinc-400 flex gap-2 hover:text-zinc-500 text-[1rem] mt-2"
        >
          Organize suas ideias, viagens, projetos ou tarefas! <MoveRight />
        </Link>
      </div>
      <div className="mt-8">
        <Suspense fallback={<Loading />}>
          <TasksList />
        </Suspense>
      </div>
    </main>
  );
};

export default Taskeeper;
