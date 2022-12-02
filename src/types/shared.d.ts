type Gender = "male" | "female" | "unisex" | undefined;

type State = {
  gender: Gender[];
  brand: string[];
  group: string[];
};

type Payload = {
  gender?: Gender;
  brand?: string;
  group?: string;
};

type Action = {
  type:
    | "ADD_GENDER"
    | "DELETE_GENDER"
    | "ADD_BRAND"
    | "DELETE_BRAND"
    | "ADD_GROUP"
    | "DELETE_GROUP"
    | "DELETE_FILTERS";
  payload: Payload;
};
