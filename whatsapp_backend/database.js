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

export async function verifyOtp(contact_no, otp) {
    // const [rows] = await pool.query(`SELECT * FROM contacts WHERE contact_no = ?`, [otp, contact_no])
    // return rows[0]
    const [rows] = await pool.query(`
            SELECT c.id,c.contact_no, o.otp
            FROM contacts c
            JOIN otps o ON c.id = o.contact_id
            WHERE c.contact_no = ? AND o.otp = ?;
        `, [contact_no, otp]);

    return rows[0];
}

export async function sendOtp(contact_id) {
    const [otp] = await pool.query(`SELECT otp FROM otps WHERE contact_id = ?`, [contact_id])
    return otp[0]
}


export async function authenticate(contact_no) {
    const [rows] = await pool.query(`SELECT * FROM contacts WHERE id = ?`, [contact_no])
    return rows[0]
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

    return rows;
}




// const display = () => {
//     verifyOtp(917218724953, 543210)
//         .then(result => {
//             // Handle the resolved data here
//             console.log(result);
//             // sendOtp(result.id).then(otp => {
//             //     console.log("otp", otp)
//             // })
//         })
//         .catch(error => {
//             // Handle any errors that may occur during the promise execution
//             console.error(error);
//         });
// };


// console.log("first", display())