import { API_ENDPOINTS } from "@/util/endpoints";
import { API_SERVICE } from "./api-urls";

export async function getBanners() {
  try {
    const response = await API_SERVICE({
      method: 'GET',
      headers: {
        user: JSON.stringify({
          company: { id: 2 },
          role: { key: 'DSN_CUSTOMER_ACCESS' }
        })
      },
      url: API_ENDPOINTS.GET_ALL_BANNERS
    })

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error in getBanners service')
  }
}