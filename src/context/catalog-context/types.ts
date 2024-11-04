import { Product } from "@/util/types/types";

export interface AppState {
  category: string | null;
  subCategory: string | null;
  products: Product[] | null;
  loading: boolean;
}

export enum ActionTypes {
  SET_SUBCATEGORY = "SET_SUBCATEGORY",
  SET_CATEGORY = "SET_CATEGORY",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_LOADING = "SET_LOADING"
}

export interface SetSubCategoryAction {
  type: ActionTypes.SET_SUBCATEGORY;
  payload: string | null;
}

export interface SetCategoryAction {
  type: ActionTypes.SET_CATEGORY;
  payload: string | null;
}

export interface SetProductsAction {
  type: ActionTypes.SET_PRODUCTS;
  payload: Product[] | null;
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
  payload: boolean;
}
