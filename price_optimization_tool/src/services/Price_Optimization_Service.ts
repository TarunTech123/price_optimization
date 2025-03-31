import { HttpService } from "./http-repository-service"

export const getProductsAPI = async (url: string) => {
    try {
        const res = await HttpService.get(url);
        return res?.data;
    } catch (err) {
        console.error("Login error", err);
    }
}