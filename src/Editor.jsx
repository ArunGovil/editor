import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        HTMLAttributes: {
          target: "_blank",
        },
      }),
    ],
    content: "",
    autofocus: true,
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
