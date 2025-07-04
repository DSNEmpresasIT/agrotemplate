import { CatalogViewComponent } from "@/components/catalog/CatalogViewComponent";
import NotResultsComponent from "@/components/catalog/NotResultsComponent";
import { ProductDetailComponent } from "@/components/catalog/ProductDetailComponent";
import Backlinks from "@/components/common/backLinks";
import Banner from "@/components/common/Banner";
import { getCatalogSlug } from "@/services/api/categories-service";
import { CUSTOMPATHS } from "@/util/enums";
import { Metadata } from "next";

async function fetchCatalogData(slug: string, filters: Record<string, string[]> = {}) {
  try {
    const response = await getCatalogSlug({
      slug,
      filters,
      page: 1,
      limit: 10,
      includeImages: true,
      includeFeatures: true,
      includeFilters: true,
    });
    return response.data || null;
  } catch (error) {
    console.error("Error fetching catalog data:", error);
    return null;
  }
}

const buildFilters = (slug: string) => {
  const filters: Record<string, string[]> = {};

  for (let i = 1; i < slug.length; i += 2) {
    const key = slug[i];
    const value = slug[i + 1];
    if (key && value) {
      const normalizado = decodeURIComponent(value);
      filters[key] = [...(filters[key] ?? []), normalizado];
    }
  }

  return filters;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const baseSlug = slug[0];
  const response = await fetchCatalogData(baseSlug, buildFilters(slug));

  if (!response) {
    return {
      title: "No encontrado",
      description: "El producto o categoria solicitada no existe.",
    };
  }

  return {
    title: response.label || response.name || "Catálogo Agropecuario - Felix Menendez",
    description: response.description || "Explora nuestro catálogo Agropecuario - Felix Menendez.",
    alternates: {
      canonical: `https://felixmenendez.com.ar/${CUSTOMPATHS.CATALOG}/${baseSlug}`,
    },
    openGraph: {
      title: response.label || response.name || "Catálogo Agropecuario - Felix Menendez",
      description: response.description || "Explora nuestro catálogo.",
      url: `https://felixmenendez.com.ar/${CUSTOMPATHS.CATALOG}/${baseSlug}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const baseSlug = slug[0];
  const filters = buildFilters(slug);
  const response = await fetchCatalogData(baseSlug, filters);

  if (!response) {
    return (
      <div>
        <Banner title="No encontramos resultados" />
        <div className="max-w-main-wrapper px-4 w-full mx-auto py-4 md:py-0 md:mt-10 md:mb-5">
          <Backlinks rutas={[CUSTOMPATHS.CATALOG, `${baseSlug}`]} />
        </div>
        <div className="flex justify-center">
          <NotResultsComponent slug={baseSlug} />
        </div>
      </div>)
  }


  const isProductDetail = baseSlug.endsWith(".html");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": isProductDetail ? "Product" : "CollectionPage",
    "name": response.label || response.name || "Producto no encontrado - Felix Menendez",
    "description": response?.description || "Descripción no disponible",
    "url": `https://felixmenendez.com.ar${CUSTOMPATHS.CATALOG}/${baseSlug}`,
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {isProductDetail ? (
        <ProductDetailComponent product={response} />
      ) : (
        <CatalogViewComponent filters={filters} slug={baseSlug} />
      )}
    </div>
  );
}