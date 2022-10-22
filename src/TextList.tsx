import { useContext } from "react";
import { TextContext } from "./helpers/text-context";

export function TextList() {
  const { textArr } = useContext(TextContext);

  return (
    <div className="TextList">
      <h2> Messages:</h2>
      {textArr.map((item: string) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
