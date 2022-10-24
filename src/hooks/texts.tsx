import { useContext } from "react";
import { TextContext } from "../context/context";

export function useTexts() {
  return useContext(TextContext);
}
