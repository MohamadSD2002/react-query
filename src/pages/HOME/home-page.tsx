import { ProductCard } from "../../features/products/components/product-card";
import { useProducts } from "../../features/products/hooks/use-products";

export function HomePage() {
  const { data, isPending, error } = useProducts();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.</h1>;
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