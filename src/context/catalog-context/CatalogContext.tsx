'use client'
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { AppState, SetCategoryAction, SetProductsAction, SetSubCategoryAction } from "./types";
import reducer from "./reducer";

const initialState: AppState = {
  subCategory: null,
  category: null,
  products: null
};

interface DataContextType {
  state: AppState;
  dispatch: Dispatch<SetCategoryAction | SetProductsAction | SetSubCategoryAction>;
}

const DataContext = createContext<DataContextType>({ state: initialState, dispatch: () => {} });

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);