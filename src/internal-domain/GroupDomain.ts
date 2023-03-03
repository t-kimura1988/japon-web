import axios, { AxiosRequestConfig, AxiosResponse, Axios, AxiosError } from "axios"
import { ApiError } from "@/exception/ApiError";
import { JaponApiError } from "@/types/error/JaponApiError";
import { NextApiRequest, NextApiResponse } from "next";
import { GroupDetailParam } from "./params/group/groupDetailParam";
import { GroupDetail } from "@/types/group/GroupDetail";
import { GoalCreateBody } from "./body/group/createBody";


export const GroupDomain = () => {
    async function getGroupDetail(params: GroupDetailParam): Promise<AxiosResponse<GroupDetail | null>>  {
        try {
            var res = await axios.get("/api/group/detail", {
                params: params
            })
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

    async function createGoal(body: GoalCreateBody): Promise<AxiosResponse<GroupDetail | null>> {
        try {
            
            var res = await axios.post("http://localhost:3000/api/group/create", body)
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

    return {
        getGroupDetail,
        createGoal
    }
}