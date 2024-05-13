import { ProductTypes } from "../types/types";

export function getPlaceholder(productTypes: string | undefined) {
  console.log(productTypes)
  if (
    productTypes &&
    (productTypes.includes(ProductTypes.FERTILIZANTES_LIQUIDOS) ||
      productTypes.includes(ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS) ||
      productTypes.includes(ProductTypes.FERTILIZANTES_SOLUBLES))
  ) {
    return 'solubles';
  }

  return 'granulados';
}
