CREATE TABLE IF NOT EXISTS users
(
    id serial PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    languages JSON,
)
