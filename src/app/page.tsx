import CreateTaskCard from "@/components/CreateTaskCard";
import TaskCard from "@/components/TaskCard";
import { listaTasks } from "@/serverActions/apiTask";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const data = await listaTasks();
  const dataSliced = data.tasks.slice(0, 3);
  return (
    <main className="bg-zinc-900 flex flex-col justify-center min-h-screen">
      <div className="font-(family-name:--font-poppins) flex flex-col pt-16 m-auto items-center justify-center w-[80%] lg:w-[40%]">
        <CreateTaskCard />
        <Link
          href={"/taskeeper"}
          className="text-zinc-300 flex gap-2 mt-12 hover:text-zinc-400 cursor-pointer"
        >
          Visualize todas as suas tarefas <MoveRight />
        </Link>
      </div>
      <section className="flex">
        <ul
          className={`grow grid p-10 gap-6 ${
            dataSliced.length === 1
              ? "grid-cols-1"
              : dataSliced.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {dataSliced.map((task, i) => (
            <TaskCard
              key={`${i}_${task}`}
              id={task.id}
              title={task.title}
              finished={task.finished}
              description={task.description}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
