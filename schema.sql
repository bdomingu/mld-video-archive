CREATE TABLE users(
    user_id varchar(255) NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL, 
    admin BOOLEAN NOT NULL DEFAULT '0',
    created_at DATETIME,
    updated_at DATETIME

);

