import { API_ENDPOINTS } from "@/util/endpoints";
import { API_SERVICE } from "./api-urls";
import { Product } from "@/util/types/types";

export async function getAllProducts(categoryId: number | null) {
  try {
    const query = categoryId && !isNaN(+categoryId) 
      ? `${API_ENDPOINTS.GET_ALL_PRODUCTS_BY_CATEGORY}/${categoryId}` 
      : API_ENDPOINTS.GET_ALL_PRODUCTS


    const response = await API_SERVICE({
      method: 'GET',
      headers: {
        user: JSON.stringify({
          company: { id: 1 },
          role: { key: 'DSN_CUSTOMER_ACCESS' }
        })
      },
      url: query
    })
   
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in getAllProducts service')
  }
} 

export async function getProductById(productId: string) {
  try {

    const response = await API_SERVICE({
      method: 'GET',
      url: API_ENDPOINTS.GET_PRODUCT_BY_ID+`/${productId}`
    })

    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Error in getProductById service')
  }
}

export async function getProductByName(productName: string): Promise<Product[]> {
  try {

    const response = await API_SERVICE({
      method: 'GET',
      url: API_ENDPOINTS.GET_PRODUCT_BY_NAME+`/${productName}`
    })

    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Error in getProductById service')
  }
}