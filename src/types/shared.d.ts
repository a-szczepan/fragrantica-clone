export type Gender = "male" | "female" | "unisex";

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
