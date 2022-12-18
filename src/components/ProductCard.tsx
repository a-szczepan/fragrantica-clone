import { Product } from "../types/shared";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  function handleProductPageRedirect(id: number) {
    navigate(`/product/${id}`);
  }

  return (
    <div
      className="product-card"
      onClick={() => handleProductPageRedirect(product.id)}
    >
      <img src={product.photo} alt={`${product.name} ${product.brand}`}></img>
      <div className="product-name-wrapper">
        <span className="name">{product.name}</span>
        <span className="brand">{product.brand}</span>
      </div>
    </div>
  );
};
