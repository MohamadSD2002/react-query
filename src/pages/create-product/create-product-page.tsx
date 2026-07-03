import { useState } from "react";

import { PageTitle } from "../../shared/components/page-title/page-title";
import { useCreateProduct } from "../../features/products/hooks/use-create-product";

import "./create-product-page.css";

export function CreateProductPage() {
  const { mutateAsync, isPending } = useCreateProduct();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !price) return;

    await mutateAsync({
      title,
      price: Number(price),
    });

    setTitle("");
    setPrice("");
  }

  return (
    <section className="container">
      <PageTitle>Create Product</PageTitle>

      <form
        className="create-product-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="title">
            Product title
          </label>

          <input
            id="title"
            type="text"
            placeholder="MacBook Pro M4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">
            Price
          </label>

          <input
            id="price"
            type="number"
            step="0.01"
            placeholder="1999"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button
          className="submit-button"
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Create Product"}
        </button>
      </form>
    </section>
  );
}