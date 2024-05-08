import { getProductsByCategory } from "@/services/Supabase/product-services";
import { CUSTOMPATHS } from "@/util/enums";
import { getPlaceholder } from "@/util/helpers/getPlaceholder";
import { Product } from "@/util/types/types";
import React, { FC, useEffect, useState } from "react";


interface RelatedProductsSectionProps {
  productSelected: Product | null;
  categorie:string | null;
  type:string | null;
}

export const RelatedProductsSection: FC<RelatedProductsSectionProps> = ({
  productSelected,
  categorie,
  type
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
  }, [productSelected, categorie, type]);




  return (
    <div className="shop-product-wrap row">
      <h5>Productos Relacionados</h5>
      {relatedProducts.map((relatedProduct: Product, i: number) => (
        <div className="col-lg-4 col-md-6 col-12" key={`${i}-related`}>
          <div className="product-item">
            <div className="product-thumb">
              <img
                src={ relatedProduct.img  || `/assets/images/product/${getPlaceholder(categorie as ProductTypes)}/${getPlaceholder(categorie as ProductTypes)}.png`}
                alt="item"
              />
              <div className="product-action-link">
                <a
                  href={`/${CUSTOMPATHS.PRODUCT}/?id=${relatedProduct.id}&type=${type}&categoria=${categorie}`}
                >
                  <i className="icofont-eye"></i>
                </a>
              </div>
            </div>
            <div className="product-content">
              <h6>
                <a
                  href={`/${CUSTOMPATHS.CATALOG}/?id=${relatedProduct.id}&type=${type}&categoria=${categorie}`}
                >
                  {relatedProduct.name}
                </a>
              </h6>
              <p
                style={{
                  paddingLeft: '10px',
                  maxWidth: '200px',
                  maxHeight: '40px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                {}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
