import { Request, Response } from 'express';
import User from '../models/user';
import { validateUserId, validateUserName, validateTeamId, validateUserAvatarURL, validateUserArrivalDate } from '../middleware/validation';

async function getUserById(req: Request, res: Response) {
    const id: string = req.params.id;
    const validation = validateUserId(id)
    if (!validation.isCorrect) {
        return res.status(400).json({ error: "Bad Request", message: validation.errorMessage })
    }
    try {
        const userInformations = await User.findByPk(id)
        if (userInformations === null) {
            return res.status(404).json({ error: "Not Found", message: "`id` not match with any users." })
        }
        return res.status(200).json(userInformations)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}

async function postUser(req: Request, res: Response) {
    const id: string = req.params.id;
    const name: string = req.query.name as string;
    const teamId: string = req.query.teamId as string;
    const avatarURL: string = req.query.avatarURL as string;
    const arrivalDate: string = req.query.arrivalDate as string;
    const validationId = validateUserId(id);
    const validationName = validateUserName(name);
    const validationTeamId = validateTeamId(teamId);
    const validationAvatarURL = validateUserAvatarURL(avatarURL);
    const validationArrivalDate = validateUserArrivalDate(arrivalDate);

    if (!validationId.isCorrect) {
        return res.status(400).json({ error: "Bad Request", message: validationId.errorMessage })
    }
    if (!validationName.isCorrect) {
        return res.status(400).json({ error: "Bad Request", message: validationName.errorMessage })
    }
    if (!validationTeamId.isCorrect) {
        return res.status(400).json({ error: "Bad Request", message: validationTeamId.errorMessage })
    }
    if (!validationAvatarURL.isCorrect) {
        return res.status(400).json({ error: "Bad Request", message: validationAvatarURL.errorMessage })
    }
    if (!validationArrivalDate.isCorrect) {
        return res.status(400).json({ error: "Bad Request", message: validationArrivalDate.errorMessage })
    }

    try {
        const UserInsert = await User.create({ userId: id, userName: name, teamId: teamId, userAvatarURL: avatarURL, userArrivalDate: arrivalDate })
        return res.status(201).json({error: "Created", user: UserInsert})
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal Server Error" })
    }

}

export { getUserById, postUser };