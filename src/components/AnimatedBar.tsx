import styled, { keyframes } from "styled-components";
import { colorMap } from "../utils/colorMap";

type Props = {
  width: number;
  text: string;
};

const accordLoad = (width: number) => keyframes`
    from {
        width: 30%;
    }
    to { 
        width: ${width}%;
    }`;

const Accord = styled.div<{ width: number; background: string }>`
  margin: 0.3rem 0;
  padding: 0.4rem;
  background: ${(props) => props.background};
  animation: ${(props) => accordLoad(props.width)} 3.5s forwards;
`;

export const AnimatedBar = ({ width, text }: Props) => {
  return (
    <div>
      <span>{text}</span>
      <Accord width={width} background={colorMap[text]}>
        {""}
      </Accord>
    </div>
  );
};
