import { ProductCard } from "../../features/products/components/product-card";
import { useProducts } from "../../features/products/hooks/use-products";
import { Error } from "../../shared/components/error/error";
import { Loading } from "../../shared/components/loading/loading";

export function HomePage() {
  const { data, isPending, error } = useProducts();

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className="container">
      <header className="page-header">
        <h1>React Query Playground</h1>

        <p>Learning React Query with React + TypeScript</p>
      </header>

      <section className="products-grid">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </main>
  );
}