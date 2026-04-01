import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

export const StoreContext = createContext<RootStore>({} as RootStore);

export const ContextProvider = StoreContext.Provider;

export const useStore = () => {
    return useContext(StoreContext);
}