import { getProductsByCategory } from "@/services/Supabase/product-services";
import { CUSTOMPATHS } from "@/util/enums";
import { getPlaceholder } from "@/util/helpers/getPlaceholder";
import { Product, ProductTypes } from "@/util/types/types";
import React, { FC, useEffect, useState } from "react";
import CardComponent from "../catalog/CardComponent";


interface RelatedProductsSectionProps {
  productSelected: Product | null;
  categorie:string | null;
}

export const RelatedProductsSection: FC<RelatedProductsSectionProps> = ({
  productSelected,
  categorie,
}) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryToFetch =
        categorie === 'undefined' || categorie === undefined || categorie === 'null'
          ? 'granulados'
          : categorie || 'granulados';

      const products = await getProductsByCategory(categoryToFetch);
        if (products) {
          // Select related products excluding the selected product, up to 5
          const selectedProducts: Product[] = [];
          for (let i = 0; i < products.length; i++) {
            const product = products[i];
            if (
              
              !(product.name === productSelected?.name) &&
              selectedProducts.length < 5
            ) {
              selectedProducts.push(product);
            }
          }

          setRelatedProducts(selectedProducts);
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchData();
  }, [productSelected, categorie]);




  return (
    <div className="shop-product-wrap row">
      <h5 className="py-7 text-2xl font-semibold text-black">{relatedProducts.length > 0 && 'Productos Relacionados'}</h5>
      {relatedProducts.map((relatedProduct: Product, i: number) => (
        <div className="grid mb-10 justify-center items-center gap-3 md:grid-cols-2 lg:grid-cols-3" key={`${i}-related`}>
         <CardComponent data={relatedProduct} filtro={categorie}/>
        </div>
      ))}
    </div>
  );
};
