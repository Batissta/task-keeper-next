"use client";
import { tTask, updateTask } from "@/serverActions/apiTask";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import LoadingButton from "../global/LoadingButton";
import FloatingMenuComponent from "./FloatingMenuComponent";
import BubbleMenuComponent from "./BubbleMenuComponent";

const EditorBase = ({ title, description, id, finished }: tTask) => {
  const [titulo, setTitulo] = useState<string>(title);
  const [loading, setLoading] = useState<boolean>(false);

  const [descricao, setDescricao] = useState<string>(description);

  const handleClick = async () => {
    if (editor) {
      setLoading(true);
      await updateTask(id, {
        title: titulo,
        description: descricao,
        finished,
        id,
      });
      setLoading(false);
    }
  };

  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: { levels: [1, 2, 3] } })],
    content: `${descricao}`,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setDescricao(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "outline-none text-zinc-200 font-[300] leading-[1.1]",
      },
    },
  });

  return (
    <>
      <div className=" flex flex-col justify-center gap-6 font-(family-name:--font-poppins) py-12 px-8 sm:px-12 w-full max-w-[800px] mx-auto">
        <div className="grid grid-cols-[1fr_2rem] justify-between items-center border-b border-b-zinc-100">
          <h1 className="text-3xl text-zinc-100 font-[500]">
            <input
              className="outline-none pb-1 w-full h-full"
              type="text"
              value={titulo}
              onChange={({ target }) => setTitulo(target.value)}
            />
          </h1>
          <LoadingButton
            desabilitado={false}
            loading={loading}
            type="save"
            onClick={handleClick}
          />
        </div>
        <EditorContent
          className={`${classNameScroll} grow my-0 overflow-y-auto text-zinc-200 prose prose-invert prose-violet border border-transparent min-w-full font-[300]`}
          editor={editor}
        />
        {editor && <FloatingMenuComponent editor={editor} />}
        {editor && <BubbleMenuComponent editor={editor} />}
      </div>
    </>
  );
};

const classNameScroll = `[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent! [&::-webkit-scrollbar-thumb]:bg-zinc-600! [&::-webkit-scrollbar-thumb]:hover:bg-zinc-800! [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:mr-6`;

export default EditorBase;
