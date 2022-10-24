import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  getTexts: () => string[];
  createText: (text: string) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const defaultValue = {
  getTexts: () => [],
  createText: () => {},
};

export const TextContext = createContext<ContextProps>(defaultValue);

export const TextProvider = ({ children }: ProductsProviderProps) => {
  const [textArr, setTextArr] = useState<string[]>([]);

  function getTexts() {
    return textArr;
  }

  function createText(text: string) {
    return setTextArr([...textArr, text]);
  }

  return (
    <TextContext.Provider value={{ getTexts, createText }}>
      {children}
    </TextContext.Provider>
  );
};
