import http from "../config";
import { AxiosResponse } from "axios";
import { IUser, ApiResponse } from "../types/userType";

const login = async (data: IUser): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const res: AxiosResponse<ApiResponse> = await http.post("user/login", data);

    const { status } = res;
    if (status === 200) {
      let key: object = res.data;
      localStorage.setItem("user", JSON.stringify(key));
    }
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const registration = async (
  data: IUser
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    debugger;

    const res: AxiosResponse<ApiResponse> = await http.post(
      "user/registration",
      data
    );

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export { login, registration };
