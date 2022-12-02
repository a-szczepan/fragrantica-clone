import { useEffect } from "react";
import { FilteringModal } from "../components/FilteringModal";
import { useScrollPrevention } from "../hooks/useScrollPrevention";

export const SearchPage = () => {
  const [scrollPrevention, setScrollPrevention] = useScrollPrevention(false);

  useEffect(() => {
    console.log(scrollPrevention);
  }, [scrollPrevention]);

  return (
    <div className="searchPage">
      <button onClick={() => setScrollPrevention(true)}>Open Filters</button>
      {scrollPrevention ? (
        <FilteringModal
          open={scrollPrevention}
          onClose={() => setScrollPrevention(false)}
        />
      ) : null}
    </div>
  );
};
