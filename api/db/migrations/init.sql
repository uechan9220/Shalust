-- +migrate Up
CREATE TABLE
IF NOT EXISTS user
(
    user_id VARCHAR(128) NOT NULL PRIMARY KEY,
    user_name VARCHAR(128),
    last_seen TIMESTAMP,
    user_location VARCHAR(128),
    comment VARCHAR(128),
    icon_url VARCHAR(128),
    header_url VARCHAR(128),
    acount_id VARCHAR(128)
);

CREATE TABLE
IF NOT EXISTS content_handling
( 
    content_id VARCHAR(128) NOT NULL PRIMARY KEY,
    user_id VARCHAR(128),
    detail VARCHAR(128),
    create_at TIMESTAMP,
    title  VARCHAR(128), 
    adult BOOLEAN,
    views INT,
    like_count  INT,
    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
);


CREATE TABLE
IF NOT EXISTS follow
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    follower_id VARCHAR(128),
    following_id VARCHAR(128),
    CONSTRAINT fk_Follower_id
        FOREIGN KEY (follower_id)
        REFERENCES user(user_id),
    CONSTRAINT fk_Following_id
        FOREIGN KEY (following_id)
        REFERENCES user(user_id)
);

CREATE TABLE
IF NOT EXISTS content_data
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(128),
    image_url VARCHAR(128),
    image_index INT,
    commic BOOLEAN,
    illustratio BOOLEAN,
    rough BOOLEAN,
    graffiti BOOLEAN,

    
    FOREIGN KEY (content_id)
    REFERENCES content_handling(content_id)
);





CREATE TABLE
IF NOT EXISTS likes
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(128),
    user_id VARCHAR(128),
   
    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
);

CREATE TABLE
IF NOT EXISTS bookmark
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(128),
    user_id VARCHAR(128),

    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
);

CREATE TABLE
IF NOT EXISTS tags
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    name VARCHAR(128)
);

CREATE TABLE
IF NOT EXISTS Included_tags
(
    id INT AUTO_INCREMENT  NOT NULL PRIMARY KEY,
    content_id VARCHAR(128),
    tag_id VARCHAR(128),
   
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