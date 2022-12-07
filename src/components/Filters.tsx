import { useState, useContext } from "react";
import { Checkbox } from "./Checkbox";
import { FilteringContext } from "../context/FilteringContextProvider";

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

type Props = {
  isDesktop: boolean;
};

export const Filters = ({ isDesktop }: Props) => {
  const context = useContext(FilteringContext);
  const [genderFilterVisibility, setGenderFilterVisibility] =
    useState<boolean>(isDesktop);
  const [brandFilterVisibility, setBrandFilterVisibility] =
    useState<boolean>(isDesktop);
  const [groupFilterVisibility, setGroupFilterVisibility] =
    useState<boolean>(isDesktop);

  return (
    <fieldset className="filters">
      <div>
        <div className="filter-option">
          <div>
            <label>Gender</label>{" "}
            {context?.state.gender.length! > 0 ? (
              <label>({context?.state.gender.length})</label>
            ) : null}
          </div>
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
        <div>
          <label>Brand</label>{" "}
          {context?.state.brand.length! > 0 ? (
            <label>({context?.state.brand.length})</label>
          ) : null}
        </div>
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
        <div>
          <label>Group</label>{" "}
          {context?.state.group.length! > 0 ? (
            <label>({context?.state.group.length})</label>
          ) : null}
        </div>
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
