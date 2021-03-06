import Joi from "@hapi/joi"
import {Request, Response, NextFunction} from "express"


export default (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const {error} =schema.validate(req["body"]);

        if (!error) return next()

        const {details } = error
        const message = details.map(i => i.message.replace(/['"]+/g, '')).join(',')
        console.error(message)

        next(`ERROR!: ${error}`)
    } catch(error) {
        next(error)
    }
}