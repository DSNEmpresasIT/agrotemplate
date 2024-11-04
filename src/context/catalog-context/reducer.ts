import { ActionTypes, AppState, SetCategoryAction, SetLoadingAction, SetProductsAction, SetSubCategoryAction } from "./types";

const rootReducer = (state: AppState, action: SetCategoryAction | SetProductsAction | SetSubCategoryAction | SetLoadingAction): AppState => {
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
      case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;

