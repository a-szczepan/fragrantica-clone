import { Product } from "../types/shared";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
      <img src={product.photo} alt={`${product.name} ${product.brand}`}></img>
      <div className="product-name-wrapper">
        <span className="name">{product.name}</span>
        <span className="brand">{product.brand}</span>
      </div>
    </div>
  );
};
