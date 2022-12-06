import { useState } from "react";
import { Checkbox } from "./Checkbox";

const arrowDown: string = require("../assets/icons/down.svg").default;
const arrowUp: string = require("../assets/icons/up.svg").default;

const gender: string[] = ["male", "female", "unisex"];
const brands: string[] = [
  "Dior",
  "Versace",
  "Prada",
  "Chanel",
  "Imaginary Autors",
  "Amouage",
  "Gallivant",
];
const groups: string[] = [
  "woody",
  "floral",
  "leather",
  "citrus",
  "amber",
  "aromatic",
];

export const Filters = () => {
  const [genderFilterVisibility, setGenderFilterVisibility] =
    useState<boolean>(false);
  const [brandFilterVisibility, setBrandFilterVisibility] =
    useState<boolean>(false);
  const [groupFilterVisibility, setGroupFilterVisibility] =
    useState<boolean>(false);

  return (
    <fieldset className="filters">
      <div>
        <div className="filter-option">
          <label>Gender</label>{" "}
          <button
            type="button"
            onClick={() => setGenderFilterVisibility(!genderFilterVisibility)}
          >
            <img
              src={genderFilterVisibility ? arrowUp : arrowDown}
              alt="arrow"
            ></img>
          </button>
        </div>
        <div className="option-wrapper">
          {genderFilterVisibility
            ? gender.map((element, index) => (
                <Checkbox
                  key={index}
                  id={element}
                  name="gender"
                  label={element}
                />
              ))
            : null}
        </div>
        <hr className="divider"></hr>
      </div>
      <div className="filter-option">
        <label>Brand</label>
        <button
          type="button"
          onClick={() => setBrandFilterVisibility(!brandFilterVisibility)}
        >
          <img
            src={brandFilterVisibility ? arrowUp : arrowDown}
            alt="arrow"
          ></img>
        </button>
      </div>
      <div className="option-wrapper">
        {brandFilterVisibility
          ? brands.map((element, index) => (
              <Checkbox key={index} id={element} name="brand" label={element} />
            ))
          : null}
      </div>
      <hr className="divider"></hr>
      <div className="filter-option">
        <label>Group</label>
        <button
          type="button"
          onClick={() => setGroupFilterVisibility(!groupFilterVisibility)}
        >
          <img
            src={groupFilterVisibility ? arrowUp : arrowDown}
            alt="arrow"
          ></img>
        </button>
      </div>
      <div className="option-wrapper">
        {groupFilterVisibility
          ? groups.map((element, index) => (
              <Checkbox key={index} id={element} name="group" label={element} />
            ))
          : null}
      </div>
    </fieldset>
  );
};
