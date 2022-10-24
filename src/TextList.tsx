import { useTexts } from "./hooks/texts";

export function TextList() {
  const { getTexts } = useTexts();

  return (
    <div className="TextList">
      <h2> Messages:</h2>
      {getTexts().map((item: string, key: number) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
}
