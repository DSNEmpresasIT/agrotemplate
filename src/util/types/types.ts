export interface CarouselData {
  id?: number;
  image: string;
  title?: string;
  description?: string;
  slug?: string;
}

export enum ProductFetchType {
  HIGHLIGHTED = 'HIGHLIGHTED',
  OFFERS = 'OFFERS',
}

// ----------------CATALOG----------------

export interface Product {
  id: number;
  label?: string;
  name?: string | null;
  formulacion?: string | null;
  img?: string | null;
  created_at: Date;
  is_active_substance?: boolean | null;
  filters?: string;
  link: string
  type:string | null;
  supplier?: {
    name: string;
  } | null;
  supplier_id?: number | undefined;
  unid?: string;
  is_highlighted: boolean;
  images?: Images[];
  description?:string
  slug: string,
  product_features?: Product_feature,
  categories?: Category[]
}
interface Images {
  url:string,
  
}
export interface Product_feature{
    id: number,
    created_at: Date,
    catalogType: string,
    feature_text: string,
    pdffiles: string,
    items: Items[],
    specs: []
}
interface Items {
  title:string,
  text:string
}

export interface Category {
  id: number;
  created_at: Date;
  name?: string;
  description?: string;
  is_active: boolean;
  deactivated_at: null;
  label?: string | null;
  active: boolean;
  slug: null;
  value: string;
  is_substance_active: boolean;
  childrens: Category[];
  images: Image[];
}

export interface CategoryData {
  id: number;
  label: string;
  description: string;
  slug: string;
  images?: Image[];
  parent?: CategoryData | CategoryData[];
  childrens?: CategoryData[];
  products?: any[];
  type?: string;
}

export interface Image {
  id: number;
  created_at: Date;
  is_active: boolean;
  deactivated_at: null;
  cloudinary_id: string;
  url: string;
  type: string;
  index: number;
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

// ------------------ intagram types -------------

export enum InstagramPostMediaTypes {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  CAROUSEL = "CAROUSEL_ALBUM"
}


export interface InstagramPost { 
  caption: string;
  id: string;
  media_type: InstagramPostMediaTypes; 
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url: string;
}