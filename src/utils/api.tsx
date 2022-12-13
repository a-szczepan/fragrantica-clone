const url = "https://json-server-test-zkjz.onrender.com";

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

export const getPerfumesPage = async (
  page: number,
  limit: number
): Promise<Response> => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
  };
  return await fetch(`${url}/perfumes?_page=${page}&_limit=${limit}`, options);
};

export const getAllPerfumes = async (): Promise<Response> => {
  const options: RequestInit = {
    method: "GET",
    mode: "cors",
  };
  return await fetch(`${url}/perfumes`, options);
};
