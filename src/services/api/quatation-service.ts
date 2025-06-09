import { API_SERVICE } from "./api-urls";

export async function sendQuotationRequest(payload: any) {
  try {
    const res = await API_SERVICE.post('/presupuesto/solicitar', payload);

    if (!res || res.status >= 400) {
      throw new Error('Error sending quote');
    }

    return res.data;
  } catch (error) {
    console.error('Error in sendQuotationRequest:', error);
    throw error;
  }
}
