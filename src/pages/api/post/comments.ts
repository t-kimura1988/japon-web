import { ApiError } from "@/exception/ApiError";
import { PostComment } from "@/types/comment/PostComment";
import { Group } from "@/types/group/Group";
import { PostDetail } from "@/types/post/PostDetail";
import { PostOfGroup } from "@/types/post/PostOfGroup";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostComment[] | ApiError>) {
    res.status(200).send([
        {
            groupId: 1,
            postId: 1,
            commentId: 1,
            commentUserId: 1,
            commentUserName: 'aaaa bbbb',
            comment: 'comment comment!!!'
        
        },
        {
            groupId: 1,
            postId: 1,
            commentId: 2,
            commentUserId: 1,
            commentUserName: 'aaaa bbbb',
            comment: 'comment comment!!!'
        
        },
        {
            groupId: 1,
            postId: 1,
            commentId: 3,
            commentUserId: 1,
            commentUserName: 'aaaa bbbb',
            comment: 'comment comment!!!'
        
        }

    ])
}