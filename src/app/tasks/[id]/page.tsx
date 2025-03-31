import EditorBase from "@/components/editor/Editor";
import PageNotFound from "@/components/global/PageNotFound";
import { Button } from "@/components/ui/button";
import { listaTask } from "@/serverActions/apiTask";
import { ArrowLeft, ArrowRight, ChevronsLeft, Plus } from "lucide-react";

type TaskParams = {
  id: string;
};

const Task = async ({ params }: { params: TaskParams }) => {
  const { id } = await params;
  const data = await listaTask(id);

  if (!data.sucess) return <PageNotFound />;
  return (
    <section className="bg-zinc-950 h-screen max-h-screen">
      <div className="grid grid-cols-[16rem_1fr]">
        <aside className="px-6 py-2 bg-zinc-700">
          <div className="flex py-1 px-1 text-zinc-50 justify-between items-center">
            <div className="group flex gap-1">
              <button className="bg-zinc-500 rounded-full w-4 h-4 group-hover:bg-red-400 duration-75" />
              <button className="bg-zinc-500 rounded-full w-4 h-4 group-hover:bg-yellow-400 duration-75" />
              <button className="bg-zinc-500 rounded-full w-4 h-4 group-hover:bg-green-400 duration-75" />
            </div>
            <Button
              variant={"ghost"}
              className="cursor-pointer hover:bg-transparent text-zinc-300 hover:text-zinc-800"
            >
              <ChevronsLeft />
            </Button>
          </div>
        </aside>
        <div className="grid bg-zinc-50">
          <div className="px-6" datatype="editorHeader">
            <div className="flex gap-2 text-zinc-800">
              <Button
                variant={"ghost"}
                className="cursor-pointer px-0 py-0 hover:bg-transparent hover:text-zinc-300"
              >
                <ArrowLeft width={18} />
              </Button>
              <Button
                variant={"ghost"}
                className="cursor-pointer px-0 py-0 hover:bg-transparent hover:text-zinc-300"
              >
                <ArrowRight width={18} />
              </Button>
              <Button
                variant={"ghost"}
                className="cursor-pointer px-0 py-0 hover:bg-transparent hover:text-zinc-300"
              >
                <Plus className="ml-1" width={20} />
              </Button>
            </div>
          </div>
          <EditorBase
            title={data.task.title}
            description={data.task.description}
            finished={data.task.finished}
            id={id}
          />
        </div>
      </div>
    </section>
  );
};

export default Task;
