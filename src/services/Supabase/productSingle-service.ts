import { ProductFeature } from "@/util/types/types";
import { createClient } from "@supabase/supabase-js";


const MAIN_SUPABASE_URL = process.env.NEXT_PUBLIC_MAIN_SUPABASE_URL;
const MAIN_SUPABASE_KEY = process.env.NEXT_PUBLIC_MAIN_SUPABASE_KEY;

if (!MAIN_SUPABASE_URL || !MAIN_SUPABASE_KEY) {
  throw new Error("Error: Supabase key or URL not provided");
}

const supabase = createClient(MAIN_SUPABASE_URL, MAIN_SUPABASE_KEY)

export const getProductSingleById = async (id: string): Promise<ProductFeature | null> => {
    try {
      const { data, error } = await supabase
        .from('productFeature')
        .select('*')
        .eq('product_id', id);
  
      if (error) {
        console.error('Error fetching data:', error);
        return null;
      }
      if (data && data.length > 0) {
        return data[0] as ProductFeature;
      } else {
        console.warn('No product found with ID:', id);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };