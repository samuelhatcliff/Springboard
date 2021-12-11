DROP DATABASE medical_center_db;
CREATE DATABASE medical_center_db;
\c medical_center.db;

CREATE TABLE doctors
(
    id SERIAL PRIMARY KEY, 
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    type_of_care TEXT UNIQUE
)

CREATE TABLE patients
(
    id SERIAL PRIMARY KEY, 
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL
)

CREATE TABLE conditions (
    id SERIAL PRIMARY KEY, 
    name TEXT UNIQUE NOT NULL,
    life_threatening BOOLEAN 
)

CREATE TABLE visits (
    id SERIAL PRIMARY KEY, 
    doctors_id INTEGER REFERENCES doctors (id),
    patient_id INTEGER NOT NULL REFERENCES patiens (id),
    date_of NOT NULL DATE,
    diagnosis_made BOOLEAN
)

CREATE TABLE diagnosis (
    id SERIAL PRIMARY KEY, 
    visits.id INTEGER NOT NULL REFERENCES visits (id)
    condition_id INTEGER NOT NULL REFERENCES conditions (id),
)

-----

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user INTEGER NOT NULL REFERENCES users (id),
    region INTEGER NOT NULL REFERENCES regions(id)
    CATEGORY INTEGER NOT NULL REFERENCES categories (id),
    type_of_care TEXT UNIQUE
)

CREATE TABLE categories 
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
)

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    region INTEGER REFERENCES regions (id)
)

CREATE TABLE regions 
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE 
)


----
Teams



Goals: 
player(id) 
game(id)

Players: 
name
team (id)


Game:
team1(id)
team2(id--cant be duplicate)
season
reff


Refz:
name
Game(id)



Teams:
Name
ranking




Season:
start_date
end_date