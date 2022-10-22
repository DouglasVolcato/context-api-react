import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [textArr, setTextArr] = useState<string[]>([]);

  return (
    <div className="App">
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
      {textArr.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
