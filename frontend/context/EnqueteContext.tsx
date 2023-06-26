import { EnqueteDefaultValues, enqueteContextType } from "@/types/EnqueteContext";
import { createContext, useContext } from "react";

export const EnqueteContext = createContext<enqueteContextType>(EnqueteDefaultValues);

export function useAuth() {
    return useContext(EnqueteContext);
}