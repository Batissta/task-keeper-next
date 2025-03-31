import { Editor, FloatingMenu } from "@tiptap/react";
import {
  Heading1,
  Heading2,
  Heading3,
  ListCollapseIcon,
  ListOrdered,
  Type,
} from "lucide-react";

const FloatingMenuComponent = ({ editor }: { editor: Editor }) => {
  if (editor)
    return (
      <FloatingMenu
        editor={editor}
        shouldShow={({ state }) => {
          const { $from } = state.selection;
          const currentLineText = $from.nodeBefore?.textContent;
          return currentLineText === "/";
        }}
        className="bg-zinc-800 py-2 px-1 shadow-xl border border-zinc-700 font-[300] shadow-black/20 rounded-lg overflow-hidden flex flex-col justify-center"
      >
        <span className="text-xs pb-2 px-1 text-zinc-300">Blocos padrão</span>
        <div className="gap-1 flex flex-col justify-center">
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              clearLine(editor);
              editor.chain().focus().setParagraph().run();
            }}
          >
            <Type className="text-zinc-500 w-5 h-5" />
            <span className="text-sm text-left text-zinc-200">Texto</span>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              clearLine(editor);
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
          >
            <Heading1 className="text-zinc-500 w-5 h-5" />
            <span className="text-sm text-left text-zinc-200">Título 1</span>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              clearLine(editor);
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
          >
            <Heading2 className="text-zinc-500 w-5 h-5" />
            <span className="text-sm text-left text-zinc-200">Título 2</span>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              clearLine(editor);
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
          >
            <Heading3 className="text-zinc-500 w-5 h-5" />
            <span className="text-sm text-left text-zinc-200">Título 3</span>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              clearLine(editor);
              editor.chain().focus().toggleList("bulletList", "listItem").run();
            }}
          >
            <ListCollapseIcon className="text-zinc-500 w-5 h-5" />
            <span className="text-sm text-left text-zinc-200">
              Lista não ordenada
            </span>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              clearLine(editor);
              editor
                .chain()
                .focus()
                .toggleList("orderedList", "listItem")
                .run();
            }}
          >
            <ListOrdered className="text-zinc-500 w-5 h-5" />
            <span className="text-sm text-left text-zinc-200">
              Lista ordenada
            </span>
          </button>
        </div>
      </FloatingMenu>
    );
};

const clearLine = (editor: Editor) => {
  const { from } = editor.state.selection;
  const startOfLine = editor.state.doc.resolve(from).start();
  const endOfLine = editor.state.doc.resolve(from).end();
  editor
    .chain()
    .focus()
    .setTextSelection({ from: startOfLine, to: endOfLine })
    .deleteSelection()
    .run();
};

export default FloatingMenuComponent;
