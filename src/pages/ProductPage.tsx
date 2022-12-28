import { useEffect, useState } from "react";
import { AnimatedBar } from "../components/AnimatedBar";
import { FragranceNote } from "../components/FragranceNote";
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
            <div className="content">
              {product.mainAccords.map((accord, index) => (
                <AnimatedBar
                  key={index}
                  width={accord.value}
                  text={accord.accord}
                />
              ))}
            </div>
          </div>
          <div className="section-wrapper">
            <span className="title">Notes</span>
            <div className="content">
              {product.notes.top?.length! > 0 ? (
                <>
                  {" "}
                  <span className="note-type">Top</span>{" "}
                  <div className="notes-wrapper">
                    {product.notes.top?.map((note, index) => (
                      <FragranceNote
                        key={index}
                        image={note.photo}
                        text={note.note}
                      />
                    ))}
                  </div>
                </>
              ) : null}
              {product.notes.heart?.length! > 0 ? (
                <>
                  {" "}
                  <span className="note-type">Heart</span>{" "}
                  <div className="notes-wrapper">
                    {product.notes.heart?.map((note, index) => (
                      <FragranceNote
                        key={index}
                        image={note.photo}
                        text={note.note}
                      />
                    ))}
                  </div>
                </>
              ) : null}
              {product.notes.base?.length! > 0 ? (
                <>
                  {" "}
                  <span className="note-type">Base</span>{" "}
                  <div className="notes-wrapper">
                    {product.notes.base?.map((note, index) => (
                      <FragranceNote
                        key={index}
                        image={note.photo}
                        text={note.note}
                      />
                    ))}{" "}
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="section-wrapper">
            <span className="title">Rating</span>
            <div className="content">
              <div className="rating">
                <span className="average">{product.rating.average}</span>
                <span className="rating-range">/ 5</span>
                <span className="rating-amount">
                  {product.rating.amount} ratings
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
