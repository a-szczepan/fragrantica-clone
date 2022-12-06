import { useWidthChecker } from "../hooks/useWidthChecker";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  reverseDirection: boolean;
};

export const Carousel = ({ images, reverseDirection }: Props) => {
  const screenWidth = useWidthChecker();
  const [slidesPerView, setSlidersPerView] = useState<number>(0);

  useEffect(() => {
    if (screenWidth < 576) {
      setSlidersPerView(1);
    } else if (screenWidth < 768) {
      setSlidersPerView(2);
    } else if (screenWidth < 992) {
      setSlidersPerView(3);
    } else if (screenWidth < 1200) {
      setSlidersPerView(4);
    } else {
      setSlidersPerView(5);
    }
  }, [screenWidth]);

  return (
    <Swiper
      className="slide-wrapper"
      navigation
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        reverseDirection,
      }}
      spaceBetween={50}
      slidesPerView={slidesPerView}
    >
      {images.map((image, index) => (
        <SwiperSlide className="slide" key={index} virtualIndex={index}>
          <img
            className="logo-carousel"
            key={index}
            src={image}
            alt="logo"
          ></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
  // )
};
