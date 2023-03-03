import { ApiError } from "@/exception/ApiError";
import { JaponUser } from "@/types/JaponUser";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<JaponUser | null | ApiError>) {
    res.status(200).send({
        uid: "AAAAAAA",
        familyName: "木村",
        givenName: "猛",
        nickName: "takeshi1988"
    })
}