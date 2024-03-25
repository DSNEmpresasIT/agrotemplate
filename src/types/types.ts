export interface CarouselData {
  id?: number;
  image: string;
  title?: string;
  description?: string;
}

export interface Product {
  id: number;
  name?: string | null;
  formulacion?: string | null;
  img?: string | null;
  created_at: Date;
  is_active_substance?: boolean | null;
  filters?: string;
  type:string | null;
  supplier?: {
    name: string;
  } | null;
  supplier_id?: number | undefined;
  unid?: string;
}