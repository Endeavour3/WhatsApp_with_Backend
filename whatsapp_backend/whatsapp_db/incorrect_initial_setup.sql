CREATE DATABASE IF NOT EXISTS whatsapp_db;
USE whatsapp_db;

CREATE TABLE IF NOT EXISTS contacts (
    contact_no VARCHAR(15) PRIMARY KEY,
    contact_name VARCHAR(255) NOT NULL,
    profile_picture BLOB DEFAULT NULL,
    contact_about TEXT DEFAULT NULL,
    last_seen DATETIME DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message_content TEXT NOT NULL,
    created_by INT NOT NULL,
    created_for INT NOT NULL,
    created_at DATETIME NOT NULL,
    delivered_at DATETIME DEFAULT NULL,
    read_at DATETIME DEFAULT NULL,
    FOREIGN KEY (created_by) REFERENCES contacts(contact_no),
    FOREIGN KEY (created_for) REFERENCES contacts(contact_no)
);

INSERT INTO contacts (contact_no, contact_name, profile_picture, contact_about, last_seen)
values
    ('+917218724953', 'Ashutosh Verulkar', '', 'Urgent calls only', '2024/02/28 12:12:12'),
    ('+919673524106', 'Rameshwar Varpe', '', 'Urgent calls only', '2024/02/28 12:12:12'),
    ('+917744938053', 'Harshal Dhokane', '', 'Sleeping', '2024/02/28 12:12:12'),
    ('+918329086681', 'Sanket Gupta', '', 'EVERYDAY IN EVERYWAY I\'M GETTING BETTER AND BETTER 😇', '2024/02/28 12:12:12'),
    ('+919766764627', 'Abhishek Chopade', '', 'At work', '2024/02/28 12:12:12'),
    ('+919075809004', 'Prajwal Ingole', '', 'Battery about to die', '2024/02/28 12:12:12'),
    ('+919075490251', 'Nikhilesh Mane', '', 'कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱', '2024/02/28 12:12:12'),
    ('+918668559528', 'Aditya', '', 'पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.', '2024/02/28 12:12:12'),
    ('+919284486105', 'Om Chokhat', '', '🏢CIVIL 😎', '2024/02/28 12:12:12'),
    ('+919767746080', 'Mangesh Ganjare', '', 'At work', '2024/02/28 12:12:12'),
    ('+918208210160', 'Prathamesh Gode', '', 'Available', '2024/02/28 12:12:12'),
    ('+919373429068', 'Akash Kharat', '', 'Available', '2024/02/28 12:12:12');
    
INSERT INTO messages (id,message_content, created_by, created_for, created_at)
VALUES
    (1,'hii', '+917218724953','+919673524106', '2024/02/09 13:28:00'),
    (2,'bye', '+917218724953','+917744938053', '2024/02/10 13:29:00'),
    (3,'kay', '+917218724953','+919673524106', '2024/02/10 03:48:00'),
    (4,'hello', '+917218724953','+919673524106', '2024/02/11 01:28:00'),
    (5,'good morning', '+917218724953', '+917744938053', '2024/02/12 13:28:00'),
    (6,'goodnight', '+917218724953', '+919673524106', '2024/02/14 13:28:00'),
    (7,'goodnight', '+917218724953', '+919673524106', '2024/02/14 13:28:00'),
    (8,'goodnight', '+917218724953', '+919673524106', '2024/02/14 13:28:00'),
    (9,'goodnight', '+917218724953', '+919673524106', '2024/02/14 13:28:00'),
    (10,'goodnight', '+917218724953', '+919673524106', '2024/02/14 13:28:00');