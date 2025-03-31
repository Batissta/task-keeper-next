"use client";
import { tTask, updateTask } from "@/serverActions/apiTask";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Code, Italic, Strikethrough } from "lucide-react";
import { useState } from "react";
import LoadingButton from "../global/LoadingButton";

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
    extensions: [StarterKit],
    content: `${descricao}`,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setDescricao(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "outline-none text-zinc-700 prose prose-inverse",
      },
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center gap-6 font-(family-name:--font-poppins) py-12 px-8 sm:px-12 w-[80%] mx-auto">
        <div className="grid grid-cols-[1fr_2rem] justify-between items-center">
          <h1 className="text-4xl text-zinc-900 border-b border-b-zinc-100 font-[700]">
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
          className={`${classNameScroll} grow my-0 overflow-y-auto text-zinc-700 prose prose-violet border border-transparent min-h-[70vh] min-w-full font-[300]`}
          editor={editor}
        />
        {editor && (
          <BubbleMenu
            className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
            editor={editor}
          >
            <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
              <Bold width={24} height={24} />
            </button>
            <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
              <Italic width={24} height={24} />
            </button>
            <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
              <Strikethrough width={24} height={24} />
            </button>
            <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
              <Code width={24} height={24} />
            </button>
          </BubbleMenu>
        )}
      </div>
    </>
  );
};

const classNameScroll = `[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent! [&::-webkit-scrollbar-thumb]:bg-zinc-600! [&::-webkit-scrollbar-thumb]:hover:bg-zinc-800! [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:mr-6`;

export default EditorBase;
