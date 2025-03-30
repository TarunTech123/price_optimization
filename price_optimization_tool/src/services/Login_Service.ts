import { LoginAPI } from "../utils/types/Types"
import { HttpService } from "./http-repository-service"

export const handleLoginAPI = (url: string,data:LoginAPI) => {
    HttpService.post(url,data)
}

export const handleSignup = (url: string,data:LoginAPI) => {
    HttpService.post(url,data)
}