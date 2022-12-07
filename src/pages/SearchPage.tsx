import { FilteringPanel } from "../components/FilteringPanel";
import { Products } from "../components/Products";
import { SearchBar } from "../components/SearchBar";
import { useWidthChecker } from "../hooks/useWidthChecker";

export const SearchPage = () => {
  const width = useWidthChecker();

  return (
    <div className="searchPage">
      {width < 576 ? (
        <div className="mobile-view">
          <SearchBar />
          <Products />
        </div>
      ) : (
        <div className="desktop-view">
          <FilteringPanel />
          <div className="content-wrapper">
            <SearchBar />
            <Products />
          </div>
        </div>
      )}
    </div>
  );
};
