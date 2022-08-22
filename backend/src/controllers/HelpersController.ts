import { Request, Response } from 'express'

import User from '../models/User'

export default {

    async reseteUser(req: Request, res: Response) {
        //res.status(200).json({test:"teste"})
        const {instagram} = req.query
        await User.deleteMany({instagram: instagram })
        return res.status(204).end()
    }
}