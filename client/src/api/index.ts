import axios, { AxiosResponse } from "axios";
const baseURL = "http://localhost:8080";

export const authUser = async (
  user: UserInfo
): Promise<AxiosResponse<SignInResponse>> => {
  const res = await axios.post(`${baseURL}/signin`, user);
  return res;
};

export const addUser = async (
  user: SignUpInfo
): Promise<AxiosResponse<SignUpResponse>> => {
  const res = await axios.post(`${baseURL}/signup`, user);
  return res;
};
