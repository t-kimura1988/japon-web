import { ApiError } from "@/exception/ApiError";
import { Group } from "@/types/group/Group";
import { PostDetail } from "@/types/post/PostDetail";
import { PostOfGroup } from "@/types/post/PostOfGroup";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostDetail | ApiError>) {
    res.status(200).send(
        {
            groupId: 1,
            groupTitle: 'group title1',
            postId: 1,
            postTitle: 'post title 1',
            postBody: 'post body',
            postCreateUserId: 1,
            postCreateUserFamilyName: "aaaaa",
            postCreateUserGivenName: 'bbbbbb',
            postCreateUserNickName: 'cccccc'
        
        })
}