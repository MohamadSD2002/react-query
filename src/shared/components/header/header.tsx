import { Link, NavLink } from "react-router-dom";

import "./header.css";

export function Header() {
  return (
    <header className="header">
      <section className="container header-content">
        <Link to="/" className="logo">React Query Lab</Link>

        <nav className="navigation">
          <NavLink to="/">Products</NavLink>

          <NavLink to="/products/create">Add Product</NavLink>
        </nav>
      </section>
    </header>
  );
}