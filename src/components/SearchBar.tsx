import { FilteringModal } from "../components/FilteringModal";
import { useScrollPrevention } from "../hooks/useScrollPrevention";
import { useWidthChecker } from "../hooks/useWidthChecker";
import { TextInput } from "./TextInput";
const filter: string = require("../assets/icons/filter.svg").default;

export const SearchBar = () => {
  const [scrollPrevention, setScrollPrevention] = useScrollPrevention(false);
  const width = useWidthChecker();
  return (
    <div className="serach-bar">
      {width < 576 ? (
        <div className="input-wrapper">
          <TextInput />
          <button
            className="filter-btn"
            type="button"
            onClick={() => setScrollPrevention(true)}
          >
            <img src={filter} alt="filter"></img>
          </button>
          {scrollPrevention ? (
            <FilteringModal
              open={scrollPrevention}
              onClose={() => setScrollPrevention(false)}
            />
          ) : null}{" "}
        </div>
      ) : (
        <TextInput />
      )}
    </div>
  );
};
