import React from "react";
import { BubbleMenu, Editor } from "@tiptap/react";
import BubbleButton from "./BubbleButton";
import {
  Bold,
  ChevronDown,
  Code,
  Italic,
  MessageSquare,
  Strikethrough,
} from "lucide-react";

const BubbleMenuComponent = ({ editor }: { editor: Editor }) => {
  return (
    <BubbleMenu
      className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex  divide-x divide-zinc-600 justify-center"
      editor={editor}
    >
      <BubbleButton>
        Text
        <ChevronDown className="w-4 h-4" />
      </BubbleButton>
      <BubbleButton>
        <MessageSquare className="w-4 h-4" />
        Comment
      </BubbleButton>
      <div className="flex items-center divide-x divide-zinc-600">
        <BubbleButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          data-active={editor.isActive("bold")}
        >
          <Bold className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          data-active={editor.isActive("italic")}
        >
          <Italic className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          data-active={editor.isActive("strike")}
        >
          <Strikethrough className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          data-active={editor.isActive("code")}
        >
          <Code className="w-4 h-4" />
        </BubbleButton>
      </div>
    </BubbleMenu>
  );
};

export default BubbleMenuComponent;
