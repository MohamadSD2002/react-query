import { ProductCard } from "../../features/products/components/product-card";
import { useProducts } from "../../features/products/hooks/use-products";
import { ErrorState } from "../../shared/components/error/error-state";
import { Loading } from "../../shared/components/loading/loading";
import { PageTitle } from "../../shared/components/page-title/page-title";


export function HomePage() {
  const { data, isPending, error } = useProducts();

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <main className="container">
      <header className="page-header">
        <PageTitle>Products</PageTitle>

        <p>Learning React Query with React + TypeScript</p>
      </header>

      <section className="products-grid">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
