import { State, Action, Gender } from "../types/shared";

export function filteringReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_GENDER": {
      const gender = action.payload.gender;
      if (gender) {
        if (!state.gender.includes(gender)) {
          state.gender.push(action.payload.gender!);
        }
        return { ...state };
      } else {
        throw Error("gender is undefined");
      }
    }
    case "DELETE_GENDER": {
      const gender = action.payload.gender;
      if (gender) {
        return {
          ...state,
          gender: state.gender.filter((element: Gender) => element !== gender),
        };
      } else {
        throw Error("gender is undefined");
      }
    }
    case "ADD_BRAND": {
      const brand = action.payload.brand;
      if (brand) {
        if (!state.brand.includes(brand)) {
          state.brand.push(action.payload.brand!);
        }
        return { ...state };
      } else {
        throw Error("brand is undefined");
      }
    }
    case "DELETE_BRAND": {
      const brand = action.payload.brand;
      if (brand) {
        return {
          ...state,
          brand: state.brand.filter((element: string) => element !== brand),
        };
      } else {
        throw Error("brand is undefined");
      }
    }
    case "ADD_GROUP": {
      const group = action.payload.group;
      if (group) {
        if (!state.group.includes(group)) {
          state.group.push(action.payload.group!);
        }
        return { ...state };
      } else {
        throw Error("group is undefined");
      }
    }
    case "DELETE_GROUP": {
      const group = action.payload.group;
      if (group) {
        return {
          ...state,
          group: state.group.filter((element: string) => element !== group),
        };
      } else {
        throw Error("group is undefined");
      }
    }
    case "ADD_KEYWORD": {
      const keyword = action.payload.keyword;
      if (keyword) {
        return {
          ...state,
          keyword,
        };
      } else {
        throw Error("keyword is undefined");
      }
    }
    case "DELETE_FILTERS": {
      return {
        gender: [],
        brand: [],
        group: [],
        keyword: "",
      };
    }
  }
}
