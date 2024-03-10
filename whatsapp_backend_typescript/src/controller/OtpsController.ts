import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Otps } from "../entity/Otps"

export class OtpsController {

    private otpsRepository = AppDataSource.getRepository(Otps)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.otpsRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const otp = await this.otpsRepository.findOne({
            where: { id }
        })

        if (!otp) {
            return "unregistered user"
        }
        return otp
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const user = Object.assign(new Otps(), {
            firstName,
            lastName,
            age
        })

        return this.otpsRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let otpToRemove = await this.otpsRepository.findOneBy({ id })

        if (!otpToRemove) {
            return "this user not exist"
        }

        await this.otpsRepository.remove(otpToRemove)

        return "user has been removed"
    }

}