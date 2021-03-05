use ucode_web;

CREATE TABLE users
(
    id int NOT NULL AUTO_INCREMENT,
    login varchar(255) NOT NULL unique,
    password varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL unique,
    primary key (id)
)