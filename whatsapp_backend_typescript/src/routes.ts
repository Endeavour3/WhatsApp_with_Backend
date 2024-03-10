import { ContactsController } from "./controller/ContactsController"
import { MessagesController } from "./controller/MessagesController"
import { OtpsController } from "./controller/OtpsController"

export const Routes = [
    {
        method: "get",
        route: "/contacts",
        controller: ContactsController,
        action: "all"
    },
    {
        method: "get",
        route: "/contacts/:id",
        controller: ContactsController,
        action: "one"
    },
    {
        method: "post",
        route: "/contacts",
        controller: ContactsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/contacts/:id",
        controller: ContactsController,
        action: "remove"
    },
    {
        method: "get",
        route: "/messages",
        controller: MessagesController,
        action: "all"
    },
    {
        method: "get",
        route: "/messages/:id",
        controller: MessagesController,
        action: "one"
    },
    {
        method: "post",
        route: "/messages",
        controller: MessagesController,
        action: "save"
    },
    {
        method: "delete",
        route: "/messages/:id",
        controller: MessagesController,
        action: "remove"
    },
    {
        method: "get",
        route: "/otp",
        controller: OtpsController,
        action: "all"
    },
    {
        method: "get",
        route: "/otp/:id",
        controller: OtpsController,
        action: "one"
    },
    {
        method: "post",
        route: "/otp",
        controller: OtpsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/otp/:id",
        controller: OtpsController,
        action: "remove"
    }
]