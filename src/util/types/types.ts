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

export interface Category {
  id: number;
  category?: string | null;
  created_at: Date;
}

export interface subCategories {
  id: number;
  categorie:string
}

export interface ProductFeature {
  pdffiles: string,
  safetyDataSheet: string,
  description: string,
  modeOfAction: string,
  actionSite: string,
  formulation: string,
  toxicologicalClassification: string,
  presentation: string,
  activeIngredient: string,
  weedType: string,
  applicationTimingCrops: string,
  applicationTimingWeeds: string,
  actionForm: string,
  applicationLocation: string,
  downloadMarbete: string,
  downloadCommercialFlyer : string
}

