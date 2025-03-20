
import { API_ENDPOINTS } from "@/util/endpoints";
import { API_SERVICE } from "./api-urls";

export async function getCatalogSlug(slug: string) {
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