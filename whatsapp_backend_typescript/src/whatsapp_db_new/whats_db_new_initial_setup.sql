CREATE DATABASE IF NOT EXISTS whatsapp_db_new;

USE whatsapp_db_new;

CREATE TABLE IF NOT EXISTS Contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contact_no VARCHAR(255) UNIQUE NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255) DEFAULT NULL,
  contact_about VARCHAR(255) DEFAULT NULL,
  last_seen DATETIME DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message_content TEXT NOT NULL,
  send_from_id INT NOT NULL,
  send_to_id INT NOT NULL,
  created_at DATETIME NOT NULL,
  delivered_at DATETIME DEFAULT NULL,
  read_at DATETIME DEFAULT NULL,
  FOREIGN KEY (send_from_id) REFERENCES Contacts(id),
  FOREIGN KEY (send_to_id) REFERENCES Contacts(id)
);

CREATE TABLE IF NOT EXISTS Otps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  otp VARCHAR(255) NOT NULL,
  contact_id INT,
  FOREIGN KEY (contact_id) REFERENCES Contacts(id)
);



INSERT INTO contacts (contact_no, contact_name, profile_picture, contact_about, last_seen)
values
    ('917218724953', 'Ashutosh Verulkar', '', 'Urgent calls only', '2024-02-28 12:12:12'),
    ('919673524106', 'Rameshwar Varpe', '', 'Urgent calls only', '2024-02-28 12:12:12'),
    ('917744938053', 'Harshal Dhokane', '', 'Sleeping', '2024-02-28 12:12:12'),
    ('918329086681', 'Sanket Gupta', '', "EVERYDAY IN EVERYWAY I\'M GETTING BETTER AND BETTER 😇", '2024-02-28 12:12:12'),
    ('919766764627', 'Abhishek Chopade', '', 'At work', '2024-02-28 12:12:12'),
    ('919075809004', 'Prajwal Ingole', '', 'Battery about to die', '2024-02-28 12:12:12'),
    ('919075490251', 'Nikhilesh Mane', '', 'कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱', '2024-02-28 12:12:12'),
    ('918668559528', 'Aditya', '', 'पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.', '2024-02-28 12:12:12'),
    ('919284486105', 'Om Chokhat', '', '🏢CIVIL 😎', '2024-02-28 12:12:12'),
    ('919767746080', 'Mangesh Ganjare', '', 'At work', '2024-02-28 12:12:12'),
    ('918208210160', 'Prathamesh Gode', '', 'Available', '2024-02-28 12:12:12'),
    ('919373429068', 'Akash Kharat', '', 'Available', '2024-02-28 12:12:12');
    
INSERT INTO messages (message_content, send_from_id, send_to_id, created_at)
VALUES
    ('hii', 1,2, '2024-02-09 13:28:00'),
    ('bye', 1,3, '2024-02-10 13:29:00'),
    ('kay', 1,2, '2024-02-10 03:48:00'),
    ('hello', 1,2, '2024-02-11 01:28:00'),
    ('good morning', 1, 3, '2024-02-12 13:28:00'),
    ('goodnight', 1, 2, '2024-02-14 13:28:00'),
    ('goodnight', 1, 2, '2024-02-14 13:28:00'),
    ('goodnight', 1, 2, '2024-02-14 13:28:00'),
    ('goodnight', 1, 2, '2024-02-14 13:28:00'),
    ('goodnight', 1, 2, '2024-02-14 13:28:00');


INSERT INTO otps (contact_id,otp)
VALUES
    (1,'543210'),
    (2,'543212'),
    (3,'543213'),
    (4,'543214'),
    (5,'543215'),
    (6,'543216'),
    (7,'543217'),
    (8,'543218'),
    (9,'543219'),
    (10,'543220'),
    (11,'543221'),
    (12,'543222');