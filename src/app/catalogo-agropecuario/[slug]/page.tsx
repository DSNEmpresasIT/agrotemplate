import { CatalogViewComponent } from "@/components/catalog/CatalogViewComponent";
import NotResultsComponent from "@/components/catalog/NotResultsComponent";
import { ProductDetailComponent } from "@/components/catalog/ProductDetailComponent";
import Backlinks from "@/components/common/backLinks";
import Banner from "@/components/common/Banner";
import { getCatalogSlug } from "@/services/api/categories-service";
import { CUSTOMPATHS } from "@/util/enums";
import { Metadata } from "next";

async function fetchCatalogData(slug: string) {
  try {
    const response = await getCatalogSlug(slug);
    return response || null;
  } catch (error) {
    console.error("Error fetching catalog data:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>  {
  const { slug } = await params;
  console.log("Generating metadata for", slug);

  const response = await fetchCatalogData(slug);

  if (!response) {
    return {
      title: "No encontrado",
      description: "El producto o categoria solicitada no existe.",
    };
  }

  return {
    title: response.name || "Catálogo Agropecuario - felixmenendez",
    description: response.description || "Explora nuestro catálogo Agropecuario - Felix Menendez.",
    alternates: {
      canonical: `https://felixmenendez.com.ar/${CUSTOMPATHS.CATALOG}/${slug}`,
    },
    openGraph: {
      title: response.name || "Catálogo Agropecuario - felixmenendez",
      description: response.description || "Explora nuestro catálogo.",
      url: `https://felixmenendez.com.ar/${CUSTOMPATHS.CATALOG}/${slug}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }){
  const { slug } =  await params;

  if (!slug) return <p>Loading...</p>;

  const response = await fetchCatalogData(slug);
  
  if (!response) {
    return (
    <div className="min-h-screen">
      <Banner title="No encontramos resultados" />
      <div className="max-w-[1568px] px-5 w-full mx-auto py-4 md:py-0 md:mt-8 md:mb-5">
        <Backlinks rutas={[CUSTOMPATHS.CATALOG, `${slug}`]}/>
      </div>
      <div className="flex justify-center">
       <NotResultsComponent slug={slug} />;
      </div>
    </div>)
  }

  const data = response.data;
  const isProductDetail = slug.endsWith(".html");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": isProductDetail ? "Product" : "CollectionPage",
    "name": data?.name,
    "description": data?.description,
    "url": `https://felixmenendez.com.ar/${slug}`,
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {isProductDetail ? <ProductDetailComponent product={data} /> : <CatalogViewComponent data={data} />}
    </div>
  );
}