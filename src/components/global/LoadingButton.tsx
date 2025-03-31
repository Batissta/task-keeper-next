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
              <Save className="text-zinc-50" />
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
            type === "save" ? "bg-transparent border-none text-zinc-800" : ""
          }`}
          onClick={onClick}
        >
          <Loader2 className="animate-spin text-zinc-50" />
        </Button>
      )}
    </>
  );
};

export default LoadingButton;
