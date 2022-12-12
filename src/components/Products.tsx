import { useEffect, useState } from "react";
import { getPerfumesPage } from "../utils/api";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getPerfumesPage(1, 20);
      setProducts(await res.json());
    };
    fetchProducts();
  }, []);
  return (
    <div className="products-container">
      {products ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <div>wait</div>
      )}
    </div>
  );
};
