import { ActionTypes, AppState, SetCategoryAction, SetProductsAction, SetSubCategoryAction } from "./types";

const rootReducer = (state: AppState, action: SetCategoryAction | SetProductsAction | SetSubCategoryAction): AppState => {
  switch (action.type) {
    case ActionTypes.SET_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.payload
      };
    case ActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;

