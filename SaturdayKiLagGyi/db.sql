-- create a new db & privileges root TIGER600
CREATE DATABASE blogs_db;
GRANT ALL PRIVILEGES ON * . * TO 'new_user'@'localhost';
FLUSH PRIVILEGES;

create table user(id int(5) primary key auto_increment,
full_name varchar(50),password varchar(100),
phone_no varchar(15),created_time DATE);
-- user table
create table user (
    id int primary key auto_increment,
    fullName varchar(50),
    email varchar(30),
    password varchar(100),
    phoneNo varchar(15),
    createdTimestamp DATETIME default CURRENT_TIMESTAMP
);
-- insert in user
insert into user (fullName,email,password,phoneNo,)values(?,?,?,?,?);
-- cat table
create TABLE categories(id int primary key auto_increment,
title varchar(30),
isDeleted int DEFAULT 0,
description varchar(500));

-- blogs table
CREATE TABLE blogs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) ,  
  contents VARCHAR(255), 
  createdTimestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  isDeleted int DEFAULT 0,
  userId int,
  categoryId int,
  constraint FK_userblog FOREIGN KEY (userId) REFERENCES user(id),
  constraint FK_catblog FOREIGN KEY (categoryId) REFERENCES categories(id)
);




