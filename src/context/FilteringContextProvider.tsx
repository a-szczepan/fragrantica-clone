import * as React from "react";
import { filteringReducer } from "../context/FilteringReducer";
import { Action, State } from "../types/shared";

type Dispatch = (action: Action) => void;
type Props = { children: React.ReactNode };

const initValue = {
  gender: [],
  brand: [],
  group: [],
  keyword: "",
};

export const FilteringContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
} | null>(null);

export function FilteringContextProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(filteringReducer, initValue);
  const value = { state, dispatch };
  return (
    <FilteringContext.Provider value={value}>
      {children}
    </FilteringContext.Provider>
  );
}
