DROP DATABASE create_table_db;
CREATE DATABASE create_table_db;
\c create_table.db;






CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    comment_text TEXT NOT NULL
)

CREATE TABLE posts (
    title TEXT,
    username TEXT, 
    link TEXT
)

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username: VARCHAR(15) UNIQUE NOT NULL, 
    password VARCHAR(20) NOT NULL
) 

CREATE TABLE (subreddits) (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users ON DELETE SET NULL,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INTEGER, CHECK (subscribers > 0) DEFAULT 1,
    is_private BOOLEAN DEFAULT false
)

