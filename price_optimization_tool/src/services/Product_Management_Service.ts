import { ProductDetails } from "../utils/types/Types";
import { HttpService } from "./http-repository-service"

export const AddProductAPI = async (url: string, data: ProductDetails) => {
    try {
        const response = await HttpService.post(url, data);
        return response?.data;
    } catch (err) {
        console.log('add product err', err)
    }
}

export const DeleteProduct = async (url: string, id: number | undefined) => {
    try {
        const response = await HttpService.delete(`${url}/${id}`);
        return response?.data;
    } catch (err) {
        console.log('DeleteProduct', err)
    }
}

export const SearchProduct = async (url: string, value: string) => {
    try {
        const response = await HttpService.get(`${url}?name=${value}`);
        return response?.data;
    } catch (err) {
        console.log('SearchProduct', err)
    }
}

export const SearchProductByCategory = async (url: string, value: number) => {
    try {
        const response = await HttpService.get(`${url}/category?category_id=${value}`);
        return response?.data;
    } catch (err) {
        console.log('SearchProductByCategory', err)
    }
}

export const GetCategories = async (url: string) => {
    try {
        const response = await HttpService.get(url);
        return response?.data;
    } catch (err) {
        console.log('add product err', err)
    }
}