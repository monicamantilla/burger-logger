###SCHEMA

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id INTEGER  NOT NULL auto_increment,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY (id)
);
