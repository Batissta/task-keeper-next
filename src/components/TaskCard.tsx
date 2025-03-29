import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Asterisk, Check, MoveUpRight } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const TaskCard = ({
  title,
  description,
  finished,
}: {
  title: string;
  description: string;
  finished: boolean;
}) => {
  return (
    <Card className="font-(family-name:--font-poppins) p-6 bg-zinc-950 border-zinc-600 shadow-2xs shadow-zinc-600">
      <div className="justify-between items-center flex gap-6">
        <CardTitle className="text-xl font-[500] text-zinc-300 col-span-3">
          {title}
        </CardTitle>
        {finished ? (
          <span className="bg-green-600 rounded-[50%] p-1">
            <Check className="text-zinc-300" />
          </span>
        ) : (
          <span className="bg-blue-700 rounded-[50%] p-1">
            <Asterisk className="text-zinc-300" />
          </span>
        )}
      </div>
      <Separator className="bg-zinc-700" />
      <div>
        <p className="text-zinc-500">
          {description
            ? `${description.slice(0, 120)}...`
            : "Vou criar um componente aqui para dizer que ainda não tem uma descrição para essa atividade"}
        </p>
        <Button className="mt-4 text-zinc-300 group transition w-fit duration-200 cursor-pointer overflow-hidden bg-zinc-800 hover:bg-zinc-700">
          <p className="translate-x-[-200%] group-hover:translate-x-0 duration-600 opacity-0 hidden group-hover:opacity-100 group-hover:to-100% group-hover:block ease-in">
            Editar atividade
          </p>
          <MoveUpRight />
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
