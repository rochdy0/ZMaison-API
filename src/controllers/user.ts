import {Request, Response} from 'express';
import User from '../models/user';
import validateUserId from '../middleware/validation';

async function getUserById (req: Request, res: Response) {
        const id: string = req.params.id;
        const validation = validateUserId(id)
        if (!validation.isCorrect)
        {
            return res.status(400).json({error: "Bad Request", message: validation.errorMessage})
        }
        try
        {
            const userInformations = await User.findByPk(id)
            if (userInformations === null)
            {
                return res.status(404).json({error: "Not Found", message: "`id` not match with any users."})
            }
            return res.status(200).json(userInformations)
        }
        catch(err)
        {
            console.log(err)
            return res.status(500).json({error: "Internal Server Error"})
        }
    }

export default getUserById;