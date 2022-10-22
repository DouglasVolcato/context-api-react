import { Form } from "./Form";
import { TextList } from "./TextList";
import { TextContext } from "./helpers/text-context";
import { useState } from "react";

export function App() {
  const [textArr, setTextArr] = useState<string[]>([]);

  return (
    <div className="App">
      <TextContext.Provider value={{ textArr, setTextArr }}>
        <Form />
        <TextList />
      </TextContext.Provider>
    </div>
  );
}
