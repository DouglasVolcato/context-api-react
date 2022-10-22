import { useState, useContext } from "react";
import { TextContext } from "./helpers/text-context";
import "./App.css";

export function Form() {
  const [text, setText] = useState<string>("");
  const { textArr, setTextArr } = useContext(TextContext);

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
          setTextArr([...textArr, text]);
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
