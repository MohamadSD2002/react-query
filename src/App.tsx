import { ProductCard } from "./features/products/components/product-card";
import { useProducts } from "./features/products/hooks/use-products";

function App() {
  const { data, isPending, error } = useProducts();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;