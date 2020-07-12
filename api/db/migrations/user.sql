-- +migrate Up
CREATE TABLE
IF NOT EXISTS user
(
    user_id VARCHAR(50) NOT NULL PRIMARY KEY,
    user_name VARCHAR(50),
    last_seen TIMESTAMP,
    user_location VARCHAR(50),
    comment VARCHAR(50),
    icon_url VARCHAR(50),
    acount_id VARCHAR(50)
);

-- +migrate Down
DROP TABLE IF EXISTS user;