import { Link } from "react-router-dom";
import type { Product } from "../types/product";

import "./product-card.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <article className="product-card">
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="product-card-content">
          <h3>{product.title}</h3>

          <p>{product.description}</p>

          <div className="product-price">
            ${product.price}
          </div>
        </div>
      </article>
    </Link>
  );
}