import { ApiError } from "@/exception/ApiError";
import { Group } from "@/types/group/Group";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Group[] | null | ApiError>) {
    res.status(200).send([
        {
            groupId: 1,
            groupName: 'aaaaa',
            groupDetail: 'group detail',
            groupJoinNum: 1,
            groupCreateUserId: 1,
            groupCreateUserName: 'aaaaaaaaa'
        },
        {
            groupId: 2,
            groupName: 'bbbbbb',
            groupDetail: 'group detail',
            groupJoinNum: 40,
            groupCreateUserId: 1,
            groupCreateUserName: 'aaaaaaaaa'
        },
        {
            groupId: 3,
            groupName: 'cccccc',
            groupDetail: 'group detail',
            groupJoinNum: 40,
            groupCreateUserId: 1,
            groupCreateUserName: 'aaaaaaaaa'
        }
    ])
}