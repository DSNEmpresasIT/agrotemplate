
import { API_ENDPOINTS } from "@/util/endpoints";
import { API_SERVICE } from "./api-urls";

export async function getAllCategories(categoryId?: string | null) {
  try {
    const query = (categoryId && !isNaN(+categoryId)) 
    ? API_ENDPOINTS.GET_CATEGORIES + `?categoryId=${categoryId}&front=true` 
    : API_ENDPOINTS.GET_CATEGORIES;

    const response = await API_SERVICE({
      method: 'GET',
      headers: {
        user: JSON.stringify({
          company: { id: 1 },
          role: { key: 'DSN_CUSTOMER_ACCESS' }
        })
      },
      url: query,
    });

    return response.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error.message)
  }
}

export async function getCategoryByName(name?: string | null) {
  try {
    const query = API_ENDPOINTS.GET_CATEGORIES_BY_NAME + `/${name}` 
    
    const response = await API_SERVICE({
      method: 'GET',
      url: query,
    });

    return response.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error.message)
  }
}

