import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { FilteringContext } from "../context/FilteringContextProvider";
import { ActionType } from "../types/shared";
const search: string = require("../assets/icons/search.svg").default;

export const TextInput = () => {
  const context = useContext(FilteringContext);
  const [, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    context?.dispatch({
      type: "ADD_KEYWORD" as ActionType,
      payload: {
        keyword: input ? input : " ",
      },
    });
    setSearchParams({ page: String(1) });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="search"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          onFocus={(e) => (e.target.placeholder = " ")}
          onBlur={(e) => (e.target.placeholder = "Search...")}
        ></input>
        <span className="separator"></span>
      </div>
      <button className="search-btn" type="submit">
        <img src={search} alt="search"></img>
      </button>
    </form>
  );
};
