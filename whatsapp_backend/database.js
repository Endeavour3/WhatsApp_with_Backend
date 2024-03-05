import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getContacts() {
    const [rows] = await pool.query("SELECT * FROM contacts")
    return rows
}


export async function checkContactNo(contact_no) {
    const [rows] = await pool.query(`SELECT * FROM contacts WHERE contact_no = ?`, [contact_no])
    return rows[0]
}

export async function sendOtp(contact_id) {
    const [otp] = await pool.query(`SELECT otp FROM otps WHERE contact_id = ?`, [contact_id])
    return otp[0]
}


export async function authenticate(contact_no) {
    const [rows] = await pool.query(`SELECT * FROM contacts WHERE id = ?`, [contact_no])
    return rows[0]
    // const rows = await pool.query(`SELECT * FROM contacts WHERE id = ?`, [contact_no])
    // return rows
}

export async function addContact(contact_no, contact_name, profile_picture, contact_about) {
    const [rows] = await pool.query('INSERT INTO contacts (contact_no, contact_name, profile_picture, contact_about) VALUES (?, ?, ?, ?)', [contact_no, contact_name, profile_picture, contact_about])
    return rows
}

export async function getContact(id) {
    const [rows] = await pool.query(`SELECT * FROM contacts WHERE id = ?`, [id])
    return rows[0]
}

export async function setProfile(profile_picture, id) {
    const result = await pool.query(`UPDATE contacts SET profile_picture=? WHERE id = ?`, [profile_picture, id])
    return result
}

// export async function addProfilePicture(contact_no, contact_name, contact_about) {
//     const [rows] = await pool.query('INSERT INTO contacts (contact_no, contact_name, contact_about) VALUES (?, ?, ?)', [contact_no, contact_name, contact_about])
//     return rows
// }

export async function getMessages() {
    const [rows] = await pool.query("SELECT * FROM messages")
    return rows
}

export async function getContactMessages(sendFrom, sendTo) {
    const [rows] = await pool.query(`
        SELECT msg.*, c1.contact_name AS sender_name, c2.contact_name AS receiver_name
        FROM messages msg
        JOIN contacts c1 ON msg.send_from = c1.id
        JOIN contacts c2 ON msg.send_to = c2.id
        WHERE (msg.send_from = ? AND msg.send_to = ?) OR (msg.send_from = ? AND msg.send_to = ?)
    `, [sendFrom, sendTo, sendTo, sendFrom]);

    return rows;
}

export async function setMessage(message_content, send_from, send_to, created_at) {
    const rows = await pool.query(`
    INSERT INTO messages (message_content, send_from, send_to, created_at) VALUES (?, ?, ?, ?)
    `, [message_content, send_from, send_to, created_at]);

    // console.log("setMessage",rows)
    return rows;
}




// const display = () => {
//     checkContactNo(917218724953)
//         .then(result => {
//             // Handle the resolved data here
//             // console.log(result);
//             sendOtp(result.id).then(otp => {
//                 console.log("otp", otp)
//             })
//         })
//         .catch(error => {
//             // Handle any errors that may occur during the promise execution
//             console.error(error);
//         });
// };


// console.log("first", display())

// export async function createNote(title, content) {
//     const [result] = await pool.query(
//         `INSERT INTO notes (title, content)
//         VALUES (?, ?)`,
//         [title, content]
//     )

//     const id = result.insertId
//     return getNote(id)
// }

// export async function delNote(id) {
//     const result1 = await pool.query(`DELETE FROM notes WHERE id = ?`, [id])

//     const result2 = await getNotes()
//     return result2
// }