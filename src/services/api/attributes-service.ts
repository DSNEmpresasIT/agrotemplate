
import { API_ENDPOINTS } from "@/util/endpoints";
import { API_SERVICE } from "./api-urls";

export async function getAttributes(productId: number) {
  try {
    const response = await API_SERVICE({
      method: 'GET',
      url: `${API_ENDPOINTS.GET_ATTRIBUTES}&productId=${productId}`
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in getAttributes service');
  }
}