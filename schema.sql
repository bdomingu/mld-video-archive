CREATE TABLE members(
    member_id varchar(255) NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL, 
    admin BOOLEAN NOT NULL DEFAULT '0',
    created_at DATETIME,
    updated_at DATETIME

);

CREATE TABLE videos(
    member_id varchar(255) NOT NULL,
    video_id varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    watched BOOLEAN NOT NULL,
    completed BOOLEAN NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);

