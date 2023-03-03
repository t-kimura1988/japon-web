import { ApiError } from "@/exception/ApiError";
import { Group } from "@/types/group/Group";
import { PostOfGroup } from "@/types/post/PostOfGroup";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostOfGroup[] | null | ApiError>) {
    res.status(200).send([
        {
            groupId: 1,
            postId: 1,
            postTitle: 'post title 1',
            postBody: 'post body',
            postCreateUserId: 1,
            postCreateUserFamilyName: "aaaaa",
            postCreateUserGivenName: 'bbbbbb',
            postCreateUserNickName: 'cccccc'
        
        },
        {
            groupId: 1,
            postId: 2,
            postTitle: 'post title 2',
            postBody: 'post body',
            postCreateUserId: 1,
            postCreateUserFamilyName: "aaaaa",
            postCreateUserGivenName: 'bbbbbb',
            postCreateUserNickName: 'cccccc'
        
        },
        {
            groupId: 1,
            postId: 3,
            postTitle: 'post title 3',
            postBody: 'post body',
            postCreateUserId: 1,
            postCreateUserFamilyName: "aaaaa",
            postCreateUserGivenName: 'bbbbbb',
            postCreateUserNickName: 'cccccc'
        
        },
        {
            groupId: 1,
            postId: 4,
            postTitle: 'post title 4',
            postBody: 'post body',
            postCreateUserId: 1,
            postCreateUserFamilyName: "aaaaa",
            postCreateUserGivenName: 'bbbbbb',
            postCreateUserNickName: 'cccccc'
        
        },
    ])
}