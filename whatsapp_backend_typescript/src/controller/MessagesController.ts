import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Messages } from "../entity/Messages"

export class MessagesController {

    private messagesRepository = AppDataSource.getRepository(Messages)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.messagesRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const message = await this.messagesRepository.findOne({
            where: { id }
        })

        if (!message) {
            return "unregistered user"
        }
        return message
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const message = Object.assign(new Messages(), {
            firstName,
            lastName,
            age
        })

        return this.messagesRepository.save(message)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let messageToRemove = await this.messagesRepository.findOneBy({ id })

        if (!messageToRemove) {
            return "this user not exist"
        }

        await this.messagesRepository.remove(messageToRemove)

        return "user has been removed"
    }

}