import { useParams } from "react-router-dom";

import { useProduct } from "../../features/products/hooks/use-product";

import "./product-page.css";
import { Loading } from "../../shared/components/loading/loading";
import { Error } from "../../shared/components/error/error";

export function ProductPage() {
  const { id } = useParams();

  const productId = Number(id);

  if (!Number.isFinite(productId)) {
    return <h2>Invalid Product Id</h2>;
  }

  const {
    data: product,
    isPending,
    error,
  } = useProduct(productId);

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="container">
      <div className="product-detail">

        <div className="product-detail-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="product-detail-content">

          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <div className="product-detail-price">
            ${product.price}
          </div>

        </div>

      </div>
    </section>
  );
}