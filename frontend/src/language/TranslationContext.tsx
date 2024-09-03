import { createContext } from "react";

interface TranslationContextType {
    apiKey: string;
  }
  
  const TranslationContext = createContext<TranslationContextType | null>(null);

  export default TranslationContext;
