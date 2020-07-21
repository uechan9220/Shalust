package model

import (
	"time"
)

type User struct {
	User_id   string    `json:"user_id"`
	Name      string    `json:"name"`
	Icon_url  string    `json:" icon_url"`
	Comment   string    `json:"comment"`
	Acount_id string    `json:"acount_id"`
	Last_seen time.Time `json:"last_seen"`
	Location  string    `json:"location"`
}
type Follow struct {
	Id           int    `json:"id"`
	Follow_id    string `json:"follow_id"`
	Following_id string `json:"following_id"`
}
type Commment struct {
	Id          int    `json:"id"`
	Post_id     string `json:"post_id"`
	Post_userid string `json:"post_userid"`
}
type Illustratio struct {
	Id          int       `json:"id"`
	Content_id  string    `json:"content_id"`
	User_id     string    `json:"user_id"`
	Commment    string    `json:"comment"`
	Image_url   string    `json:"image_url"`
	Create_at   time.Time `json:"create_at"`
	Title       string    `json:"title"`
	Image_index int       `json:"image_index"`
	Adult       bool      `json:"adult"`
}
type Commic struct {
	Id          int       `json:"id"`
	Content_id  string    `json:"content_id"`
	User_id     string    `json:"user_id"`
	Commment    string    `json:"comment"`
	Image_url   string    `json:"image_url"`
	Create_at   time.Time `json:"create_at"`
	Title       string    `json:"title"`
	Image_index int       `json:"image_index"`
	Adult       bool      `json:"adult"`
}
type Graffiti struct {
	Id          int       `json:"id"`
	Content_id  string    `json:"content_id"`
	User_id     string    `json:"user_id"`
	Commment    string    `json:"comment"`
	Image_url   string    `json:"image_url"`
	Create_at   time.Time `json:"create_at"`
	Title       string    `json:"title"`
	Image_index int       `json:"image_index"`
	Adult       bool      `json:"adult"`
}
type Rough struct {
	Id          int       `json:"id"`
	Content_id  string    `json:"content_id"`
	User_id     string    `json:"user_id"`
	Commment    string    `json:"comment"`
	Image_url   string    `json:"image_url"`
	Create_at   time.Time `json:"create_at"`
	Title       string    `json:"title"`
	Image_index int       `json:"image_index"`
	Adult       bool      `json:"adult"`
}
type Like struct {
	Id         int    `json:"id"`
	User_id    string `json:"user_id"`
	Content_id string `json:"content_id"`
}
type Bookmark struct {
	Id         int    `json:"id"`
	User_id    string `json:"user_id"`
	Content_id string `json:"content_id"`
}
type Included_tags struct {
	Id         int    `json:"id"`
	tag_id     string `json:"tag_id"`
	Content_id string `json:"content_id"`
}
type tags struct {
	Id   int    `json:"id"`
	name string `json:"name"`
}
