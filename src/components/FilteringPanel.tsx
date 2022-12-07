import { Filters } from "./Filters";

export const FilteringPanel = () => {
  return (
    <form className="filtering-panel">
      <div className="panel-header-wrapper">
        <label>Filters</label>
      </div>
      <Filters isDesktop={true} />
    </form>
  );
};
