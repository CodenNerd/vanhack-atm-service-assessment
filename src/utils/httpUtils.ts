import { Response } from "express"
import { statusCodes } from "./enums"

export const badRequestError = (res: Response, message: string) => {
    res.status(statusCodes.BAD_REQUEST)
        .json(message)
}