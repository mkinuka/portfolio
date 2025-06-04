import { createContext, useState } from "react";
import type { Language } from "../types/portfolioType";

type LanguageContextType = {
    type: Language;
    setLanguage: (lang: Language) => void;
}
export const LanguageContext = createContext<LanguageContextType>({
    type: "sv",
    setLanguage: () => {},
})

export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const [type, setLanguage] = useState<Language>("sv")
    return <LanguageContext.Provider value={{type, setLanguage}}>
            {children}
        </LanguageContext.Provider>
}