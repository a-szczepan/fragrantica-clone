export type Gender = "men" | "women" | "unisex";

export type State = {
  gender: Gender[];
  brand: string[];
  group: string[];
};

export type Payload = {
  gender?: Gender;
  brand?: string;
  group?: string;
};

export type ActionType =
  | "ADD_GENDER"
  | "DELETE_GENDER"
  | "ADD_BRAND"
  | "DELETE_BRAND"
  | "ADD_GROUP"
  | "DELETE_GROUP"
  | "DELETE_FILTERS";

export type Action = {
  type: ActionType;
  payload: Payload;
};

export type Accord = {
  accord: string;
  value: number;
};

export type Note = {
  note: string;
  photo: string;
};

export type Product = {
  id: number;
  photo: string;
  gender: Gender;
  name: string;
  brand: string;
  mainAccords: Accord[];
  rating: {
    average: number;
    amount: number;
  };
  occasions: {
    day: number;
    night: number;
    spring: number;
    summer: number;
    amount: number;
    winter: number;
  };
  notes: {
    top?: Note[];
    heart?: Note[];
    base?: Note[];
  };
};

export type FilteringResponse = {
  data: [];
  page: number;
  itemsPerPage: number;
  total: number;
};
