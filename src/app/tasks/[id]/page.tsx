import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/FlipWords";
import { listaTask } from "@/serverActions/apiTask";
import { MoveLeft, MoveRight } from "lucide-react";

type TaskParams = {
  id: string;
};

const Task = async ({ params }: { params: TaskParams }) => {
  const data = await listaTask(params.id);
  if (!data.sucess)
    return (
      <BackgroundBeamsWithCollision className="flex flex-col">
        <section className="w-[80%]">
          <h1 className="text-4xl font-(family-name:--font-poppins) font-black text-zinc-900 text-center">
            Não encontramos essa tarefa...
            <br />
            <FlipWords
              words={[
                "Pensa pelo lado positivo...",
                "Menos uma tarefa",
                "Isso é bom, né?",
              ]}
            />
          </h1>
          <p className="text-[1rem] font-(family-name:--font-poppins) font-medium text-zinc-600 text-center">
            mas não se preocupe, vou te levar para um lugar seguro.
          </p>
          <div className="flex justify-between w-[40%] mx-auto mt-16">
            <Button
              variant={"default"}
              className="cursor-pointer border border-zinc-900 hover:bg-transparent group"
            >
              <MoveLeft className="group-hover:text-zinc-900" />
            </Button>
            <Button
              variant={"default"}
              className="cursor-pointer border border-zinc-900 hover:bg-transparent group"
            >
              <MoveRight className="group-hover:text-zinc-900" />
            </Button>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    );
  return <div>Task</div>;
};

export default Task;
