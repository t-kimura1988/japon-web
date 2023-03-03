import { ApiError } from "@/exception/ApiError";
import { Group } from "@/types/group/Group";
import { GroupDetail } from "@/types/group/GroupDetail";
import { JaponUser } from "@/types/JaponUser";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
     res: NextApiResponse<GroupDetail | null | ApiError>) {
    res.status(200).send(
        {
            groupId: 2,
            groupName: 'bbbbbb',
            groupDetail: 'group detail',
            groupJoinNum: 40,
            groupCreateUserId: 1,
            groupCreateUserName: 'aaaaaaaaa'
        },)
}