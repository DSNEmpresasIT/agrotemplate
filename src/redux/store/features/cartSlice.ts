import { Product } from '@/util/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CartItem {
  product: Product;
  quantity: number;
}

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }
  return [];
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const initialState: CartState = {
  cart: loadCartFromLocalStorage(),
  isVisible: false,
};

export interface CustomDimensions {
  weight?: number;
  width?: number;
  height?: number;
  thickness?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customDimensions?: CustomDimensions;
  compatible?: Product[];
  isCustomized?: boolean;
}

interface CartState {
  cart: CartItem[];
  isVisible: boolean;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.cart.findIndex(
        item => item.product.id === action.payload.product.id
      );
      if (existingIndex !== -1) {
        state.cart[existingIndex].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      saveCartToLocalStorage(state.cart);
    },

    updateCartItemCustomization: (
      state,
      action: PayloadAction<{
        slug: string;
        customDimensions?: CustomDimensions;
        compatible?: Product[];
      }>
    ) => {
      const item = state.cart.find(item => item.product.slug === action.payload.slug);
      if (item) {
        item.customDimensions = action.payload.customDimensions;
        item.compatible = action.payload.compatible || [];
        item.isCustomized = true;
        saveCartToLocalStorage(state.cart);
      }
    },

    resetCartItemCustomization: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.product.slug === action.payload);
      if (item) {
        item.customDimensions = undefined;
        item.compatible = undefined;
        item.isCustomized = false;
        saveCartToLocalStorage(state.cart);
      }
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.product.id !== action.payload);
      saveCartToLocalStorage(state.cart);
    },

    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.product.id === action.payload);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(state.cart);
      }
    },

    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(item => item.product.id === action.payload);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
        saveCartToLocalStorage(state.cart);
      }
    },

    toggleCartVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },

    clearCart: (state) => {
      state.cart = [];
      saveCartToLocalStorage(state.cart);
    },

    setCartVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = !action.payload;
    },
  },
});

export const {
  addItemToCart,
  updateCartItemCustomization,
  resetCartItemCustomization,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  toggleCartVisibility,
  clearCart,
  setCartVisibility,
} = cartSlice.actions;

export default cartSlice.reducer;
