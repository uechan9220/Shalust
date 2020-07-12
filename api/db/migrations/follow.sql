-- +migrate Up
CREATE TABLE
IF NOT EXISTS follow
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    follower_id VARCHAR(50),
    CONSTRAINT fk_Follower_id
    FOREIGN KEY (follower_id)
    REFERENCES user(user_id) 
);

-- +migrate Down
DROP TABLE IF EXISTS follow;