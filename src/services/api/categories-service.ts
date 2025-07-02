
import { API_ENDPOINTS } from "@/util/endpoints";
import { API_SERVICE } from "./api-urls";
import qs from "qs";

export interface GetCatalogOptions {
  slug?: string;
  catalogId?: number;
  search?: string;
  filters?: Record<number, string[]>;
  includeImages?: boolean;
  includeFeatures?: boolean;
  includeFilters?: boolean;
  page?: number;
  limit?: number;
}


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

export async function getCatalogSlug(options: GetCatalogOptions = {}) {
  try {
    const {
      slug = '',
      catalogId = process.env.API_CATALOG_ID,
      search,
      filters,
      includeImages = true,
      includeFeatures = true,
      includeFilters = true,
      page = 1,
      limit = 10,
    } = options;

    const params: Record<string, any> = {
      catalogId,
      search,
      includeImages: includeImages ? true : false,
      includeFeatures: includeFeatures ? true : false,
      includeFilters: includeFilters ? true : false,
      page,
      limit,
    };

    if (filters) {
      params.filters = filters;
    }

    const response = await API_SERVICE({
      method: 'GET',
      url: `${API_ENDPOINTS.GET_CATALOG_SLUG}${slug}`,
      params,
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
    });


    return response.data;
  } catch (error: any) {
    console.error('Error en getCatalogSlug:', error.message);
    return null;
  }
}
