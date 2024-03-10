import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Contacts } from "../entity/Contacts"

export class ContactsController {

    private contactsRepository = AppDataSource.getRepository(Contacts)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.contactsRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const contact = await this.contactsRepository.findOne({
            where: { id }
        })

        if (!contact) {
            return "unregistered user"
        }
        return contact
    }

    async save(request: Request, response: Response, next: NextFunction) {

        const contact_name = request.body.contactName

        const profile_picture = request.file ? request.file.buffer : null;

        const contact_no = request.body.contactName

        const contact_about = request.body.contactName

        const result = await this.contactsRepository.findOne({
            where: { contact_no }
        })

        if (result) {
            console.log("result", result)
            return { message: "This Number is already registered" , profile_picture}
        } else {
            const contact = Object.assign(new Contacts(), {
                contact_name,
                // profile_picture,
                contact_no,
                contact_about
            })

            return this.contactsRepository.save(contact)
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let contactToRemove = await this.contactsRepository.findOneBy({ id })

        if (!contactToRemove) {
            return "this user not exist"
        }

        await this.contactsRepository.remove(contactToRemove)

        return "user has been removed"
    }

}