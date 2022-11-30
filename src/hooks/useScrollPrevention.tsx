import { useEffect, useState } from "react";

export const useScrollPrevention = (enabled: boolean) => {
  const [scrollPrevention, setScrollPrevention] = useState<boolean>(enabled);

  useEffect(() => {
    if (scrollPrevention) {
      const root = document.getElementById("root");
      root?.classList.add("fixed-body");
    } else {
      const root = document.getElementById("root");
      root?.classList.remove("fixed-body");
    }
  }, [scrollPrevention]);

  return [scrollPrevention, setScrollPrevention] as const;
};
