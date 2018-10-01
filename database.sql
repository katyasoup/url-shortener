-- For storing users:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR
);

-- For storing URLs:

CREATE TABLE urls (
id SERIAL PRIMARY KEY,
longUrl VARCHAR,
shortUrl VARCHAR,
owner_id INT,
FOREIGN KEY (owner_id) REFERENCES users(id)
    ON DELETE CASCADE,
clickCount INT DEFAULT 0,
addedAt TIMESTAMP DEFAULT NOW()
);