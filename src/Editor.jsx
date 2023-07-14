import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import linkifyHtml from "linkify-html";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        HTMLAttributes: {
          target: "_blank",
        },
        after: false,
      }),
    ],
    content: "",
    autofocus: true,
    onUpdate({ editor }) {
      const content = editor.getHTML();
      const linkedContent = linkifyHtml(content);
      if (content !== linkedContent) {
        editor.commands.setContent(linkedContent);
      }
    },
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
