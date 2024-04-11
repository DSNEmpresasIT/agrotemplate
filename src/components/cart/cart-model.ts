import { Product } from "@/util/types/types";

export interface CartItem {
  product: Product;
  quantity: number;
}
