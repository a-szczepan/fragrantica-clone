import { InView } from "react-intersection-observer";

type Props = {
  id: string;
  image: string;
  animationDirection: "right" | "left";
};

export const AnimatedImage = ({ id, image, animationDirection }: Props) => {
  return (
    <InView
      className="view-container"
      onChange={(inView: boolean) => {
        const image = document.getElementById(id);
        if (inView) {
          if (image)
            image.style.animation =
              animationDirection === "right"
                ? "image-show-right 1s ease"
                : "image-show-left 1s ease";
        } else {
          if (image) image.style.animation = "";
        }
      }}
    >
      <img id={id} src={image} alt="perfume bottle"></img>
    </InView>
  );
};
