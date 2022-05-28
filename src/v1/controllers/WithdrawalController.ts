import { Request, Response } from "express";
import { badRequestError } from "../../utils/httpUtils";

export const WithdrawalController = (req: Request, res: Response) => {

    const { amount, validNotes } = req.body;

    const notes = [];
    let change = amount;
    let noteIndex = 0;

    while( change ) {
        if ( !validNotes[noteIndex] ) break;
        if ( change - validNotes[noteIndex] >= 0 ) {
            change = change - validNotes[noteIndex]
            notes.push(validNotes[noteIndex])
        } else {
            noteIndex++
        }
    }

    if (change) {
        return badRequestError(res, 'Unavailable notes for that amount')
    }

    res.json({
        notes
    });
}