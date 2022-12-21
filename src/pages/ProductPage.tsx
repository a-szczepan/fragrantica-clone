import { useEffect, useState } from "react";
import { AnimatedBar } from "../components/AnimatedBar";
import { Product } from "../types/shared";
import { getPerfumeById } from "../utils/api";

//const accordBarColors: string[] = ["#663800", "#713F28", "#914110", "#A36854", "#AB6D4B", "#9A5F3D", "#A76E5A", "#B5866E", "#B27450", "#D99772"]

export const ProductPage = () => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const id = Number(window.location.pathname.replace("/product/", ""));
    const fetchProduct = async () => {
      const res = await getPerfumeById(id).then((res) => res.json());
      setProduct(res);
    };
    fetchProduct();
  });

  return (
    <div>
      {product?.name ? (
        <div className="product-page">
          <div className="details-wrapper">
            <h1>{product.name}</h1>
            <span className="brand">{product.brand}</span>
            <span className="gender">{product.gender}</span>
          </div>
          <img
            src={product.photo}
            alt={`${product.name} ${product.brand}`}
          ></img>
          <div className="section-wrapper">
            <span className="title">Main accords</span>
            {product.mainAccords.map((accord, index) => (
              <AnimatedBar
                key={index}
                width={accord.value}
                text={accord.accord}
              />
            ))}
          </div>
          <div className="section-wrapper">
            <span className="title">Notes</span>
            <div>N1</div>
            <div>N2</div>
            <div>N3</div>
          </div>
          <div className="section-wrapper">
            <span className="title">Rating</span>
            <div>N1</div>
            <div>N2</div>
            <div>N3</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
