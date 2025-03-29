"use client";
import React from "react";
import { Card, CardAction, CardTitle } from "./ui/card";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import LoadingButton from "./LoadingButton";
import { cadastraTask } from "@/serverActions/apiTask";
import { Badge } from "lucide-react";
import { revalidateTagAction } from "@/serverActions/revalidatePathAction";
import { FlipWords } from "./ui/FlipWords";

const CreateTaskCard = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");

  const handleSubmit = async () => {
    setLoading(true);
    await cadastraTask(title);
    revalidateTagAction("updateTasks");
    setTitle("");
    setLoading(false);
  };

  return (
    <Card className="w-full h-[400px] py-0 border-zinc-600">
      <BackgroundBeamsWithCollision className="flex h-full flex-col items-center rounded-xl">
        <CardTitle className="text-4xl text-center mb-8 font-black tracking-tight w-[80%]">
          Cadastre
          <FlipWords words={["suas tarefas!", "atividades!", "projetos!"]} />
        </CardTitle>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col items-center"
        >
          <label
            htmlFor="taskTitle"
            className="flex bg-transparent border border-zinc-600 placeholder:text-zinc-400 w-[80%] mx-auto px-2 py-1 rounded mb-4 text-zinc-600 gap-1"
          >
            <Badge className="text-zinc-400" />
            <CardAction
              id="taskTitle"
              placeholder="Digite o título de sua task"
              className="focus:outline-none grow"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </label>

          <LoadingButton
            loading={loading}
            desabilitado={title.length > 0 ? false : true}
            onClick={handleSubmit}
          />
        </form>
      </BackgroundBeamsWithCollision>
    </Card>
  );
};

export default CreateTaskCard;
