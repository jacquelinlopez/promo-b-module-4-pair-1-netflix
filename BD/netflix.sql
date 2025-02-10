CREATE DATABASE netflix;
use netflix;

CREATE TABLE movies(
	idMovies int auto_increment not null primary key,
    title varchar (45) not null,
    genre varchar (45) not null,
    image varchar (1000) not null,
    category varchar (45) not null,
    year int 
   
);
describe movies;

CREATE TABLE Users(
	idUser int auto_increment not null primary key,
	user  varchar (45) not null,
	password varchar (45) not null,
	name varchar (45) not null,
	email varchar (45) not null,
	plan_details  varchar (45) not null
);
describe Users;

CREATE TABLE Actors(
	idActor int auto_increment not null primary key,
    name  varchar (45) not null,
    lastname varchar (45) not null,
    country varchar (45) not null,
    birthday date
);
describe Actors;




