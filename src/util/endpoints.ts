const catalogId = process.env.API_CATALOG_ID;

export const API_ENDPOINTS = {
  // CATALOGS
  GET_CATALOG_SLUG: `/catalogs/advanced-products/`,
  // BANNERS
  GET_ALL_BANNERS: `/banners/${catalogId}`,
  // PRODUCTS
  GET_ALL_PRODUCTS: `/products/catalog/${catalogId}`,
  GET_ALL_PRODUCTS_BY_CATEGORY: `/products/${catalogId}`,
  GET_PRODUCT_BY_ID: `/products/catalog/${catalogId}`,
  GET_PRODUCT_BY_NAME: `/products/search/${catalogId}`,
  // PRODUCT ATTRIBUTES
  GET_ATTRIBUTES: `/attributes/with-relations?catalogId=${catalogId}`,
  // CATEGORIES
  GET_CATEGORIES: `/catalog/categories/${catalogId}`,
  GET_CATEGORIES_BY_NAME: `/catalog/categories/search/${catalogId}`

}