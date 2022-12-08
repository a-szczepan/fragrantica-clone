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
