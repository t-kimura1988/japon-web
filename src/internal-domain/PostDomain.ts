import { PostOfGroup } from "@/types/post/PostOfGroup";
import { PostOfGroupParam } from "./params/post/getPostOfGroup";
import axios, { AxiosRequestConfig, AxiosResponse, Axios, AxiosError } from "axios"
import { ApiError } from "@/exception/ApiError";
import { JaponApiError } from "@/types/error/JaponApiError";
import { NextApiRequest, NextApiResponse } from "next";
import { PostDetailParam } from "./params/post/getPostDetail";
import { PostDetail } from "@/types/post/PostDetail";
import { PostCommentsParam } from "./params/post/getPostComments";
import { PostComment } from "@/types/comment/PostComment";

export const PostDomain = () => {

    async function getPostOfGroup(param: PostOfGroupParam): Promise<AxiosResponse<PostOfGroup[] | null>>  {
        try {
            var res = await axios.get("http://localhost:3000/api/post/group-list", {
                params: param
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

    async function getPostDetail(param: PostDetailParam): Promise<AxiosResponse<PostDetail>>  {
        try {
            var res = await axios.get("http://localhost:3000/api/post/detail", {
                params: param
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

    async function getPostComments(param: PostCommentsParam): Promise<AxiosResponse<PostComment[] | null>> {
        try {
            var res = await axios.get("http://localhost:3000/api/post/comments", {
                params: param
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

    return {
        getPostOfGroup,
        getPostDetail,
        getPostComments
    }
}