import { Product } from '@/util/types/types';
import { ActionTypes, SetCategoryAction, SetProductsAction } from './types';

export const setCategory = (category: string | null): SetCategoryAction => ({
  type: ActionTypes.SET_CATEGORY,
  payload: category
});

export const setSubCategory = (category: string | null): SetCategoryAction => ({
  type: ActionTypes.SET_CATEGORY,
  payload: category
});

export const setProducts = (products: Product[] | null): SetProductsAction => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products
});

