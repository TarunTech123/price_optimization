import { AxiosResponse } from "axios"

import { LoginAPI, LoginSignupResponse, SignupRequest } from "../utils/types/Types"
import { HttpService } from "./http-repository-service"

export const handleLoginSignupAPI = async (url: string, data: LoginAPI| SignupRequest) => {
    try {
        const res: AxiosResponse<LoginSignupResponse> = await HttpService.post(url, data);
        return res?.data;
    } catch (err) {
        console.error("Login error", err);
    }
};