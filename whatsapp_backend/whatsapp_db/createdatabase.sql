CREATE DATABASE IF NOT EXISTS whatsapp_db;
USE whatsapp_db;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contact_no VARCHAR(15) UNIQUE,
    contact_name VARCHAR(255) NOT NULL,
    profile_picture BLOB DEFAULT NULL,
    contact_about TEXT DEFAULT NULL,
    last_seen DATETIME DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message_content TEXT NOT NULL,
    send_from INT NOT NULL,
    send_to INT NOT NULL,
    created_at DATETIME NOT NULL,
    delivered_at DATETIME DEFAULT NULL,
    read_at DATETIME DEFAULT NULL,
    FOREIGN KEY (send_from) REFERENCES contacts(id),
    FOREIGN KEY (send_to) REFERENCES contacts(id)
);
