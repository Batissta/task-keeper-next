"use client";
import { Button } from "../ui/button";
import { CirclePlus, Save } from "lucide-react";
import { Loader2 } from "lucide-react";
import { MouseEventHandler } from "react";

const LoadingButton = ({
  loading,
  desabilitado,
  onClick,
  type,
}: {
  loading: boolean;
  desabilitado: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: "save" | "card";
}) => {
  return (
    <>
      {!loading && (
        <Button
          disabled={desabilitado}
          variant="outline"
          className={`cursor-pointer hover:bg-transparent w-[100%] ${
            type === "save" ? "bg-transparent border-none" : ""
          }`}
          onClick={onClick}
        >
          {type === "save" && (
            <>
              <Save />
            </>
          )}
          {type === "card" && (
            <>
              <CirclePlus />
              Cadastrar Task
            </>
          )}
        </Button>
      )}
      {loading && (
        <Button
          disabled
          className={`cursor-pointer hover:bg-transparent w-[100%] ${
            type === "save" ? "bg-zinc-100 border-none text-zinc-800" : ""
          }`}
          onClick={onClick}
        >
          <Loader2 className="animate-spin" />
        </Button>
      )}
    </>
  );
};

export default LoadingButton;
