/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { getPerfumes } from "../utils/api";
import { FilteringContext } from "../context/FilteringContextProvider";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";
import { FilteringResponse, Product } from "../types/shared";

export const Products = () => {
  const context = useContext(FilteringContext);
  const paginationLimit = 20;
  const [products, setProducts] = useState<FilteringResponse>();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchProductsByFilters = async () => {
      const res = await getPerfumes(
        context?.state.gender!,
        context?.state.brand!,
        context?.state.group!,
        context?.state.keyword!,
        page,
        paginationLimit
      ).then((res) => res.json());
      setProducts(res);
      setPage(Number(searchParams.get("page")));
      window.scrollTo(0, 0);
    };
    fetchProductsByFilters();
  }, [
    JSON.stringify(context?.state.brand),
    JSON.stringify(context?.state.gender),
    JSON.stringify(context?.state.group),
    context?.state.keyword,
    page,
    searchParams,
  ]);

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
