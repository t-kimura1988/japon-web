import { ApiError } from "@/exception/ApiError";
import { JaponApiError } from "@/types/error/JaponApiError";
import axios, { AxiosRequestConfig, AxiosResponse, Axios, AxiosError } from "axios"

export const HomeDomain = () => {
    async function getHomeList() {
        
        try {
            var res = await axios.get("http://localhost:3000/api/home/index")

            return res
        } catch (e) {
            if(e instanceof AxiosError) {
                var resData: ApiError = e.response?.data
                throw new JaponApiError(resData.errorCd, resData.code)
            } else {
                console.log("Error!!!!!")
                throw new Error();
            }
        }
    }

    return {
        getHomeList
    }
}