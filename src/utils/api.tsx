import { Gender } from "../types/shared";

const url = "https://json-server-test-zkjz.onrender.com";
// const url = `http://localhost:3200`

export const getBrands = async (): Promise<Response> => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
  };
  return await fetch(`${url}/brands`, options);
};

export const getGroups = async (): Promise<Response> => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
  };
  return await fetch(`${url}/groups`, options);
};

export const getPerfumes = async (
  gender: Gender[],
  brands: string[],
  groups: string[],
  keyword: string,
  page: number,
  limit: number
): Promise<Response> => {
  const genderQuery =
    gender.length > 0 ? `gender=${gender.join("&gender=")}` : "";
  const brandsQuery =
    brands.length > 0 ? `brand=${brands.join("&brand=")}` : "";
  const groupsQuery =
    groups.length > 0 ? `group=${groups.join("&group=")}` : "";
  const pageQuery = page ? `&page=${page}&limit=${limit}` : "";
  const keywordQuery = keyword.length > 3 ? `keyword=${keyword}` : "";

  const options: RequestInit = {
    method: "GET",
    mode: "cors",
  };
  return await fetch(
    `${url}/perfumes/filter?${genderQuery}&${brandsQuery}&${groupsQuery}&${pageQuery}&${keywordQuery}`,
    options
  );
};
