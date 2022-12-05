export function filteringReducer(state: State, action: Action): State {
  function pushValue(
    stateProperty: Gender[] | string[],
    value: Gender | string
  ) {
    if (stateProperty.includes(value as never)) {
      return state;
    } else {
      stateProperty.push(value as never);
      return state;
    }
  }

  function deleteValue(
    stateProperty: Gender[] | string[],
    value: Gender | string
  ) {
    // function fun(element: Gender | string) {
    //   return element !== value;
    // }
    //stateProperty = stateProperty.filter((ele: string) => ele !== value)

    if (stateProperty.includes(value as never)) {
      return {
        ...state,
        stateProperty,
      };
    } else {
      return state;
    }
  }

  switch (action.type) {
    case "ADD_GENDER": {
      const gender = action.payload.gender;
      return pushValue(state.gender, gender);
    }
    case "DELETE_GENDER": {
      const gender = action.payload.gender;
      return deleteValue(state.gender, gender);
    }
    case "ADD_BRAND": {
      const brand = action.payload.brand;
      return pushValue(state.brand, brand);
    }
    case "DELETE_BRAND": {
      const brand = action.payload.brand;
      return deleteValue(state.brand, brand);
    }
    case "ADD_GROUP": {
      const group = action.payload.group;
      return pushValue(state.group, group);
    }
    case "DELETE_GROUP": {
      const group = action.payload.group;
      return deleteValue(state.group, group);
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
