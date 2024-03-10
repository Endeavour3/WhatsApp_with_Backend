import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contacts } from "./entity/Contacts"
import { Messages } from "./entity/Messages"
import { Otps } from "./entity/Otps"

export const AppDataSource = new DataSource({
    type:"mysql",
    host:'127.0.0.1',
    port:3306,
    username:'root',
    password:'wildlife',
    database:'whatsapp_db_new',
    synchronize: true,
    logging: false,
    entities: [Contacts, Messages, Otps],
    migrations: [],
    subscribers: [],
})


// "start": "ts-node src/index.ts",