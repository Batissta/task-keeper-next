"use client";
import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";
import { Loader2 } from "lucide-react";
import { MouseEventHandler } from "react";

const LoadingButton = ({
  loading,
  desabilitado,
  onClick,
}: {
  loading: boolean;
  desabilitado: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      {!loading && (
        <Button
          disabled={desabilitado}
          variant="outline"
          className="cursor-pointer hover:bg-transparent w-[100%]"
          onClick={onClick}
        >
          <CirclePlus />
          Cadastrar Task
        </Button>
      )}
      {loading && (
        <Button
          disabled
          className="cursor-pointer hover:bg-transparent w-[80%]"
          onClick={onClick}
        >
          <Loader2 className="animate-spin" />
          Please wait
        </Button>
      )}
    </>
  );
};

export default LoadingButton;
