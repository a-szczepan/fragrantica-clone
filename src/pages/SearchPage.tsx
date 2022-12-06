import { FilteringModal } from "../components/FilteringModal";
import { Filters } from "../components/Filters";
import { useScrollPrevention } from "../hooks/useScrollPrevention";
const filter: string = require("../assets/icons/filter.svg").default;
export const SearchPage = () => {
  const [scrollPrevention, setScrollPrevention] = useScrollPrevention(false);

  return (
    <div className="searchPage">
      <button onClick={() => setScrollPrevention(true)}>
        <img src={filter} alt="filter"></img>
      </button>
      {scrollPrevention ? (
        <FilteringModal
          open={scrollPrevention}
          onClose={() => setScrollPrevention(false)}
        />
      ) : null}
    </div>
  );
};
