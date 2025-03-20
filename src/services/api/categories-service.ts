
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
          company: { id: 2 },
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

export async function getCategoriesWithChildren() {
  try {
    const response = await API_SERVICE({ method: 'GET', url:  API_ENDPOINTS.GET_CATEGORIES })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export async function getCatalogSlug(slug = '') {
  try {
    const catalogId = process.env.API_CATALOG_ID;
    const url = `${API_ENDPOINTS.GET_CATALOG_SLUG}${slug}${catalogId ? `?catalogId=${catalogId}` : ''}`;
    let response = await API_SERVICE({ method: 'GET', url });
    return response.data;
  } catch (error: any) {
    console.error("Error en getCatalogSlug:", error.message);
    return null;
  }
}