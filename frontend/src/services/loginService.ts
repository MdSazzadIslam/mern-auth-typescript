import http from "../config";
import { AxiosResponse } from "axios";

const login = async (data: any): Promise<AxiosResponse<ApiResponse>> => {
  debugger;
  try {
    const user = {
      email: data.email,
      password: data.password,
    };
    console.log(user);
    const res: AxiosResponse<ApiResponse> = await http.post("user/login", user);
    console.log(res);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default login;
