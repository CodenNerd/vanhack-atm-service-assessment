import { NextFunction, Request, Response } from "express";
import { statusCodes } from "../../utils/enums";
import { badRequestError } from "../../utils/httpUtils";

export const WithdrawalValidation = (req: Request, res: Response, next: NextFunction) => {
    const { amount, validNotes } = req.body;
    if ( !amount ) {
       return badRequestError(res, "amount attribute is mandatory")
    }

    if ( !validNotes?.length ) {
        return badRequestError(res, "validNotes attribute is mandatory")
    }

    if ( !Number.isInteger(amount) || amount < 0 ) {
        return badRequestError(res, "amount attribute must be an integer greater than zero")
    }

    if ( validNotes.some(note => note <= 0) ) {
        return badRequestError(res, "validNotes can only contain integers greater than zero")
    }

    if ( !validNotes.every((note, i) => note > (validNotes[i + 1] || 0)) ) {
        return badRequestError(res, "notes inside validNotes must be organized in descending order")
    }

    next()
}

