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

CREATE TABLE
IF NOT EXISTS follow
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    follower_id VARCHAR(50),
    following_id VARCHAR(50),
    CONSTRAINT fk_Follower_id
        FOREIGN KEY (follower_id)
        REFERENCES user(user_id),
    CONSTRAINT fk_Following_id
        FOREIGN KEY (following_id)
        REFERENCES user(user_id)
);

CREATE TABLE
IF NOT EXISTS commic
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    user_id VARCHAR(50),
    caption VARCHAR(50),
    image_url VARCHAR(50),
    create_at VARCHAR(50),
    title  VARCHAR(50), 
    image_index INT,
    
        FOREIGN KEY (user_id)
        REFERENCES user(user_id)
);


CREATE TABLE
IF NOT EXISTS graffiti
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    user_id VARCHAR(50),
    caption VARCHAR(50),
    image_url VARCHAR(50),
    create_at VARCHAR(50),
    title  VARCHAR(50), 
    image_index INT,
   
        FOREIGN KEY (user_id)
        REFERENCES user(user_id)
);


CREATE TABLE
IF NOT EXISTS rough
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    user_id VARCHAR(50),
    caption VARCHAR(50),
    image_url VARCHAR(50),
    create_at VARCHAR(50),
    title  VARCHAR(50), 
    image_index INT,
 
    FOREIGN KEY (user_id)
    REFERENCES user(user_id)

);


CREATE TABLE
IF NOT EXISTS illustratio
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    user_id VARCHAR(50),
    caption VARCHAR(50),
    image_url VARCHAR(50),
    create_at VARCHAR(50),
    title  VARCHAR(50), 
    image_index INT,
    
    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
);


CREATE TABLE
IF NOT EXISTS likes
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    user_id VARCHAR(50),
   
    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
);

CREATE TABLE
IF NOT EXISTS bookmark
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    user_id VARCHAR(50),

    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
);

CREATE TABLE
IF NOT EXISTS tags
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE
IF NOT EXISTS Included_tags
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(50),
    tag_id VARCHAR(50),
   
    FOREIGN KEY (id)
    REFERENCES tags(id)
);



-- +migrate Down
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS follow;
DROP TABLE IF EXISTS illustratio;
DROP TABLE IF EXISTS commic; 
DROP TABLE IF EXISTS graffiti; 
DROP TABLE IF EXISTS rough;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS bookmark;
DROP TABLE IF EXISTS Included_tags;
DROP TABLE IF EXISTS tags;