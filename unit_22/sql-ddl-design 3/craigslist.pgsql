CREATE TABLE posts
(
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user INTEGER NOT NULL REFERENCES users (id),
    region INTEGER NOT NULL REFERENCES regions(id),
    CATEGORY INTEGER NOT NULL REFERENCES categories (id)
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