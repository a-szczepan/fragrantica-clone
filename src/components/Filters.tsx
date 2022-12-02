import { useState, useContext, useEffect } from "react";
import { FilteringContext } from "../context/FilteringContextProvider";
const arrow: string = require("../assets/icons/down.svg").default;

export const Filters = () => {
  const context = useContext(FilteringContext);
  const [genderFilterVisibility, setGenderFilterVisibility] =
    useState<boolean>(false);

  useEffect(() => {
    context?.dispatch({
      type: "ADD_GENDER",
      payload: {
        gender: "female",
      },
    });
    console.log(context);
    context?.dispatch({
      type: "DELETE_GENDER",
      payload: {
        gender: "female",
      },
    });
    console.log(context);
  }, []);

  return (
    <ul className="filters">
      <li>
        <div>
          <span>Gender</span>{" "}
          <button
            onClick={() => setGenderFilterVisibility(!genderFilterVisibility)}
          >
            <img src={arrow} alt="arrow"></img>
          </button>
        </div>
        {genderFilterVisibility ? (
          <div>
            <h1>Test</h1>
          </div>
        ) : null}
      </li>
      <li>
        <hr className="divider"></hr>
      </li>
      <li>
        <span>Brand</span>
        <button>
          <img src={arrow} alt="arrow"></img>
        </button>
      </li>
      <li>
        <hr className="divider"></hr>
      </li>
      <li>
        <span>Group</span>
        <button>
          <img src={arrow} alt="arrow"></img>
        </button>
      </li>
    </ul>
  );
};
