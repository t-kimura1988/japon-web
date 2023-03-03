import { ApiError } from "@/exception/ApiError";
import { JaponApiError } from "@/types/error/JaponApiError";
import { Group } from "@/types/group/Group";
import { JaponUser } from "@/types/JaponUser"
import axios, { AxiosRequestConfig, AxiosResponse, Axios, AxiosError } from "axios"
import { NextApiRequest, NextApiResponse } from "next";
import { AccountCreateBody } from "./body/account/createBody";

export const AccountDomain = () => {
    async function getJaponAccount(): Promise<AxiosResponse<JaponUser | null>> {
        try {
            var res = await axios.get("http://localhost:3000/api/account/show")

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

    async function createAccount(body: AccountCreateBody): Promise<AxiosResponse<JaponUser | null>>  {
        try {
            var res = await axios.post("http://localhost:3000/api/account/create", body)
            return res
        } catch(e) {
            if(e instanceof AxiosError) {
                var resData: ApiError = e.response?.data
                throw new JaponApiError(resData.errorCd, resData.code)
            } else {
                console.log("Error!!!!!")
                throw new Error();
            }
        }
    }

    async function getMyCreateGroup(): Promise<AxiosResponse<Group[] | null>> {
        try {
            var res = await axios.get("http://localhost:3000/api/account/myGroup")

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
        getJaponAccount,
        createAccount,
        getMyCreateGroup
    }
}