export function filteringReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_GENDER": {
      const gender = action.payload.gender;
      if (gender) {
        if (state.gender.includes(gender)) {
          return state;
        } else {
          state.gender.push(action.payload.gender!);
          return state;
        }
      } else {
        throw Error("gender is undefined");
      }
    }
    case "DELETE_GENDER": {
      const gender = action.payload.gender;
      if (gender) {
        if (state.gender.includes(gender)) {
          return {
            ...state,
            gender: state.gender.filter((element) => element !== gender),
          };
        } else {
          return state;
        }
      } else {
        throw Error("gender is undefined");
      }
    }
    case "ADD_BRAND": {
      const brand = action.payload.brand;
      if (brand) {
        if (state.brand.includes(brand)) {
          return state;
        } else {
          state.brand.push(action.payload.brand!);
          return state;
        }
      } else {
        throw Error("brand is undefined");
      }
    }
    case "DELETE_BRAND": {
      const brand = action.payload.brand;
      if (brand) {
        if (state.brand.includes(brand)) {
          return {
            ...state,
            brand: state.brand.filter((element) => element !== brand),
          };
        } else {
          return state;
        }
      } else {
        throw Error("brand is undefined");
      }
    }
    case "ADD_GROUP": {
      const group = action.payload.group;
      if (group) {
        if (state.group.includes(group)) {
          return state;
        } else {
          state.group.push(action.payload.group!);
          return state;
        }
      } else {
        throw Error("group is undefined");
      }
    }
    case "DELETE_GROUP": {
      const group = action.payload.group;
      if (group) {
        if (state.group.includes(group)) {
          return {
            ...state,
            group: state.group.filter((element) => element !== group),
          };
        } else {
          return state;
        }
      } else {
        throw Error("group is undefined");
      }
    }
    case "DELETE_FILTERS": {
      return {
        gender: [],
        brand: [],
        group: [],
      };
    }
  }
}
