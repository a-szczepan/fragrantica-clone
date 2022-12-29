import styled, { keyframes } from "styled-components";
import { colorMap } from "../utils/colorMap";
const icons = [
  { type: "day", value: require("../assets/icons/day.svg").default },
  { type: "night", value: require("../assets/icons/night.svg").default },
  { type: "spring", value: require("../assets/icons/spring.svg").default },
  { type: "summer", value: require("../assets/icons/summer.svg").default },
  { type: "autumn", value: require("../assets/icons/autumn.svg").default },
  { type: "winter", value: require("../assets/icons/winter.svg").default },
];

type Props = {
  width?: number;
  height?: number;
  text: string;
};

const loadByWidth = (width: number) => keyframes`
    from {
        width: 30%;
    }
    to { 
        width: ${width}%;
    }`;

const loadByHeight = (height: number) => keyframes`
    0% {
      height: 100px;
      width: 12.7px;
      background-color: #f1d7af;
    }

    100% { 
      height: ${100 - height}px;
      width: 12.7px;
      background-color: #f1d7af;
    }`;

const Accord = styled.div<{ width: number; background: string }>`
  margin: 0.3rem 0;
  padding: 0.4rem;
  background: ${(props) => props.background};
  animation: ${(props) => loadByWidth(props.width)} 3.5s forwards;
`;

const Ratio = styled.div<{ height: number }>`
  background-color: #080810;
  animation: ${(props) => loadByHeight(props.height)} 3.5s forwards;
`;

export const AnimatedBar = ({ width, height, text }: Props) => {
  return (
    <div>
      {width ? (
        <>
          <span>{text}</span>
          <Accord width={width!} background={colorMap[text]}>
            {""}
          </Accord>
        </>
      ) : (
        <div className="occasions-wrapper">
          <div className="occasions">
            <Ratio height={height!} />
          </div>

          <img
            src={icons.find((icon) => icon.type === text)?.value}
            alt={text}
          ></img>
        </div>
      )}
    </div>
  );
};
