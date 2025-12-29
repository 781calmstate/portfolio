import { create } from "zustand";

import createSelectors from "./selectors";

interface State {
  theme: "light" | "dark";
}

interface Actions {
  toggleTheme: () => void;
}

const initialState: State = {
  theme: "dark",
};

const useAppStoreBase = create<State & Actions>((set) => ({
  theme: initialState.theme,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default createSelectors(useAppStoreBase);
