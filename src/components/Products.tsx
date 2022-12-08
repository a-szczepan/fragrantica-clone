import { useEffect } from "react";
import { getPerfumesPage } from "../utils/api";

export const Products = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getPerfumesPage(1, 5);
      console.log(await res.json());
    };
    fetchProducts();
  }, []);
  return <div>Products</div>;
};
