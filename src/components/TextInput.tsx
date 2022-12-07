const search: string = require("../assets/icons/search.svg").default;

export const TextInput = () => {
  return (
    <form>
      <div>
        <input className="search-input" placeholder="Search..."></input>
        <span className="separator"></span>
      </div>
      <button className="search-btn" type="submit">
        <img src={search} alt="search"></img>
      </button>
    </form>
  );
};
