
import { Product } from "@/util/types/types";
import { createClient } from "@supabase/supabase-js";

const MAIN_SUPABASE_URL = process.env.NEXT_PUBLIC_MAIN_SUPABASE_URL;
const MAIN_SUPABASE_KEY = process.env.NEXT_PUBLIC_MAIN_SUPABASE_KEY;

if (!MAIN_SUPABASE_URL || !MAIN_SUPABASE_KEY) {
  throw new Error("Error: Supabase key or URL not provided");
}

const supabase = createClient(MAIN_SUPABASE_URL, MAIN_SUPABASE_KEY);

export const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const { data } = await supabase
    .from('products')
    .select(`
          *,
          supplier: supplier(name)
        `)
    
    return data as Product[] | null
  } catch (error) {
    return null
  }
}

export const getProductByName= async(productName:string):Promise<Product[] | null> => {
  try {
    const { data } = await supabase
    .from('products')
    .select(`
          *,
          supplier: supplier(name)
        `)
    .ilike('name', `%${productName}%`)
    return data as Product[] | null
  } catch (error) {
    return null
  }  
}

export const getProductsByNameInCategory = async (category: string, query: string): Promise<Product[] | null> => {
  try {
    // Step 1: Get the ID of the category
    const categoryResponse = await supabase
      .from('categories')
      .select('id')
      .ilike('category', `%${category}%`);

    if (categoryResponse.data) {
      const categoryId = categoryResponse.data[0]?.id;

      if (categoryId) {
        // Step 2: Get the IDs of the products in the category  
        const { data, error } = await supabase
          .from('products_categories')
          .select('product_id')
          .eq('category_id', categoryId);

        if (data) {
          // Map the product IDs
          const productIds = data.map(item => item.product_id);

          // Step 3: Get the details of the products with the condition of the name
          const productDetails = await supabase
            .from('products')
            .select(`
            *,
            supplier: supplier(name)
          `)
            .in('id', productIds)
            .ilike('name', `%${query}%`);

          if (productDetails.data) {
            // Return the details of the products
            return productDetails.data as Product[];
          }
        }
      }
    }
  } catch (error) {
    console.error('Error fetching products in getProductsByNameInCategory error:', error);
  }

  return null;
};


export const getProductsByCategory = async (category: string): Promise<Product[] | null> => {
  try {
    // Step 1: Get the ID of the category 'Fertilizantes'
    const categoryResponse = await supabase
      .from('categories')
      .select('id')
      .ilike('category', `%${category}%`);

    if (categoryResponse.data) {
      const categoryId = categoryResponse.data[0]?.id;

      if (categoryId) {
        // Step 2: Use the category ID in the products_categories query
        const { data, error } = await supabase
          .from('products_categories')
          .select('product_id')
          .eq('category_id', categoryId);

        if (data) {
          // Map the product IDs  
          const productIds = data.map(item => item.product_id);

          // Get all the products with the IDs searched in products_categories  
          const productDetails = await supabase
            .from('products')
            .select(`
            *,
            supplier: supplier(name)
          `)
            .in('id', productIds);

          if (productDetails.data) {
            return productDetails.data as Product[];
          }
        }
      }
    }
  } catch (error) {
    console.error('Error fetching products getProductsByCategory:', error);
  }

  return null;
};

export const getProductByFhaterCategory = async (category: string): Promise<Product[] | null> =>
 {
  try {
    // Step 1: get the ID of the category example 'Fertilizantes'
    const categoryResponse = await supabase
      .from('categories')
      .select('id')
      .ilike('category', `%${category}%`);

    if (categoryResponse.data) {
      const categoryId = categoryResponse.data[0]?.id;

      if (categoryId) {
        // Step 2: Get the IDs of the subcategories
        const subcategories  = await supabase
          .from('categories')
          .select('id')
          .eq('father_category', categoryId);
          
          const subCategoriesids = subcategories.data?.map(item => item.id);

        // Step 3: Use the IDs of the subcategories in the products_categories query
        const { data, error } = await supabase
          .from('products_categories')
          .select('product_id')
          .in('category_id', subCategoriesids || []);

        if (data) {
          // Map the product IDs 

          const productIds = data.map(item => item.product_id);

          // get all the products with the IDs searched in products_categories
          const productDetails = await supabase
            .from('products')
            .select(`
            *,
            supplier: supplier(name)
          `)
            .in('id', productIds);

          if (productDetails.data) {
            return productDetails.data as Product[];
          }
        }
      }
    }
  } catch (error) {
    console.error('Error fetching products getProductByFhaterCategory :', error);
  }

  return null;
 }



export const getProductById = async (product_id: string): Promise<Product | null> => {
  try {
    const productDetails = await supabase
      .from('products')
      .select('*')
      .eq('id', product_id);

    return productDetails.data![0] || null;
  } catch (error) {
    console.error('Error fetching product details getProductById :', error);
    return null;
  }
};