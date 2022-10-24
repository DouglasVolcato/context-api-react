import { useState } from "react";
import "./App.css";
import { useTexts } from "./hooks/texts";

export function Form() {
  const [text, setText] = useState<string>("");
  const { createText } = useTexts();

  return (
    <div className="Form">
      <input
        value={text}
        type="text"
        onChange={(event) => setText(event.target.value)}
        placeholder="Type something"
      />
      <br />
      <button
        onClick={() => {
          createText(text);
          setText("");
        }}
      >
        Send
      </button>
      <br />
      <br />
    </div>
  );
}
