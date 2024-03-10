import { addContact, authenticate, checkContactNo, getContact, getContactMessages, getContacts, getMessages, sendOtp, setMessage, setProfile, verifyOtp } from './database.js'

import express from 'express'
import multer from 'multer'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/send-otp', upload.none(), async (req, res) => {
    const contact_no = req.body.phoneNumber;
    const contact = await checkContactNo(contact_no)
    if (contact_no == contact?.contact_no) {
        const otp = await sendOtp(contact.id)
        // res.status(200).json(otp)
        res.json(otp)

    } else {
        res.status(204).json({ message: `No account is associated with Mobile No ${contact_no}` })
    }
});

app.post('/verify-otp', upload.any(), async (req, res) => {
    const contact_no = req.body.phoneNumber;
    const otp = req.body.otp;
    const result = await verifyOtp(contact_no, otp)
    if (contact_no == result.contact_no && otp == result.otp) {
        res.status(200).json({ message: "OTP verified sucessfully", contactId: result.id })
    } else {
        res.status(204).json({ message: "Incorrect OTP entered" })
    }
});

app.get("/contacts", async (req, res) => {
    const contacts = await getContacts()
    res.status(200).json(contacts)
})

app.get("/contacts/:id", async (req, res) => {
    const id = req.params.id
    const contact = await getContact(id)
    res.send(contact)
})

app.get("/login/:contact_no", async (req, res) => {
    const contact_no = req.params.contact_no
    const contact = await authenticate(contact_no)
    res.status(200).json(contact)
})

app.put("/setProfile/:id", upload.single('profile_picture'), async (req, res) => {
    const id = req.params.id

    const profile_picture = req.file ? req.file.buffer : null;

    const result = await setProfile(profile_picture, id)

    console.log("profile_picture", profile_picture)

    res.status(200).json(result)
})

app.post('/addContact', upload.single('profile_picture'), async (req, res) => {
    const { contact_no, contact_name, contact_about } = req.body;

    const profile_picture = req.file ? req.file.buffer : null;

    const checkResult = await checkContactNo(contact_no)

    if (checkResult?.contact_no == contact_no) {
        res.status(400).json({ message: "This Number is already registered" })
    }
    else {
        const result = await addContact(contact_no, contact_name, profile_picture, contact_about)
        console.log("Result", result)
        res.status(200).json({ message: "Account Created Successfully", contactId: result.insertId })
    }

    // res.status(201).json({ message: 'Contact created successfully', contactId: results.insertId })
    // res.status(200)
});



app.get("/allMessages", async (req, res) => {
    const messages = await getMessages()
    res.send(messages)
})

app.get("/messages", async (req, res) => {
    const sendFrom = req.query.send_from;
    const sendTo = req.query.send_to;

    // http://localhost:3005/messages?send_from=1&send_to=2
    const messages = await getContactMessages(sendFrom, sendTo);

    res.send(messages);
});

app.post("/sendMessage", async (req, res) => {
    const {
        message_content,
        send_from,
        send_to,
        created_at
    } = req.body

    // http://localhost:3005/sendMessage?send_from=1&send_to=2
    const message = await setMessage(message_content, send_from, send_to, created_at);

    res.status(201).send(message);
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`)
})

// const mysql = require('mysql2');
// const multer = require('multer');
// const path = require('path');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'your_mysql_user',
//     password: 'your_mysql_password',
//     database: 'whatsapp_db',
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });



// Route for handling contact creation
// app.post('/addContact', upload.single('profile_picture'), async (req, res) => {
//     const { contact_no, contact_name, contact_about } = req.body;

//     // Get the file data
//     const profile_picture = req.file ? req.file.buffer : null;

//     // // Insert data into the database
//     // const insertQuery = 'INSERT INTO contacts (contact_no, contact_name, profile_picture, contact_about) VALUES (?, ?, ?, ?)';
//     // const values = [contact_no, contact_name, profilePicture, contact_about];

//     // db.query(insertQuery, values, (err, results) => {
//     //     if (err) {
//     //         console.error('Error inserting data into MySQL:', err);
//     //         res.status(500).json({ error: 'Internal Server Error' });
//     //         return;
//     //     }

//     //     res.status(201).json({ message: 'Contact created successfully', contactId: results.insertId });
//     // });

//     const results = await addContact(contact_no, contact_name, profile_picture, contact_about)

//     res.status(201).json({ message: 'Contact created successfully', contactId: results.insertId })
//     // res.status(201).json({ contact_no, contact_name, contact_about, profile_picture })
// });