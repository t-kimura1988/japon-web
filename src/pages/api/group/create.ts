import { ApiError } from "@/exception/ApiError";
import { GroupDetail } from "@/types/group/GroupDetail";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
     res: NextApiResponse<GroupDetail | null | ApiError>) {
    res.status(200).send({
        groupId: 1,
        groupName: "string",
        groupDetail: "string",
        groupJoinNum: 1,
        groupCreateUserId: 1,
        groupCreateUserName: "string"
    })
}