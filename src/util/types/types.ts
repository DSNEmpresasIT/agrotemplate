export interface CarouselData {
  id?: number;
  image: string;
  title?: string;
  description?: string;
}

// ----------------CATALOG----------------

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

export enum ProductTypes {
  FERTILIZANTES = 'fertilizantes',
  FERTILIZANTES_GRANULADOS = 'Fertilizantes granulados',
  FERTILIZANTES_SOLUBLES = 'Fertilizantes solubles',
  FERTILIZANTES_LIQUIDOS = 'Fertilizantes liquidos',
  FERTILIZANTES_LIQUIDOS_HERBICIDAS = 'fertiliantes_liquidos_herbicida',
  HERBICIDAS = 'herbicidas',
  INSECTICIDAS_GENERAL = 'insecticidas',
  FUNGICIDAS = 'fungicidas',
  SEMILLA = 'semillas',
  HERMICIDAS = 'hermicidas',
}

// ----------------BLOG----------------

export interface Keys {
  FACEBOOK_TOKEN: string;
  FACEBOOK_PAGE_ID: string;
  INSTAGRAM_TOKEN?: string;
}


export interface FacebookPost {
  description: string;
  icon: string;
  comments: FacebookPostComments[];
  created_time: string;
  image: FacebookPostImage;
  url: string;
  reactions: any[];
}

export interface FacebookPostComments {
  created_time: string;
  message: string;
  from: {
    name: string;
    id: string;
    picture: {
      data: {
        height: number;
        is_silhouette: boolean;
        url: string;
        width: number;
      }
    }
  }
}

export interface FacebookPostImage {
  height: number;
  src: string;
  width: number;
}

export interface BlogContextState {
 keys: Keys | undefined;
 facebookPostDetail: FacebookPost | undefined;
 facebookPostData: FacebookPost[] | undefined;
}

// ----------------END BLOG TYPES----------------
