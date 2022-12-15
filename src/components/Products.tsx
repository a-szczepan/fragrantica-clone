import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { getPerfumes } from "../utils/api";
import { FilteringContext } from "../context/FilteringContextProvider";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";
import { FilteringResponse, Product } from "../types/shared";

export const Products = () => {
  const context = useContext(FilteringContext);
  const [products, setProducts] = useState<FilteringResponse>();
  const [paginationLimit] = useState<number>(20);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(Number(searchParams.get("page")));
    window.scrollTo(0, 0);
  }, [searchParams, context?.state]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getPerfumes(
        context?.state.gender!,
        context?.state.brand!,
        context?.state.group!,
        page,
        paginationLimit
      ).then((res) => res.json());
      console.log(res);
      setProducts(res);
    };
    fetchProducts();
  }, [page, paginationLimit, searchParams, context?.state]);

  return (
    <div>
      <div className="products-container">
        {products?.data ? (
          products.data.map((product: Product, index: number) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div>wait</div>
        )}
      </div>
      {products?.data.length! > 0 ? (
        <Pagination data={products!} />
      ) : (
        <span>No results</span>
      )}
    </div>
  );
};
