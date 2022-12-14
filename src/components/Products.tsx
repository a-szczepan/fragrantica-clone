import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPerfumesPage } from "../utils/api";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [paginationLimit] = useState<number>(20);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(Number(searchParams.get("page")));
    window.scrollTo(0, 0);
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getPerfumesPage(page, paginationLimit);
      setProducts(await res.json());
    };
    fetchProducts();
  }, [page, paginationLimit, searchParams]);

  return (
    <div>
      <div className="products-container">
        {products ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div>wait</div>
        )}
      </div>
      <Pagination paginationLimit={paginationLimit} currentPage={page} />
    </div>
  );
};
