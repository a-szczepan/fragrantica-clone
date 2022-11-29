import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

export const Counter = () => {
  return (
    <CountUp start={10000} end={70000} separator=" " duration={1.5} prefix="+">
      {({ countUpRef, start }) => (
        <InView onChange={start} delayedCall>
          <span ref={countUpRef} />
        </InView>
      )}
    </CountUp>
  );
};
