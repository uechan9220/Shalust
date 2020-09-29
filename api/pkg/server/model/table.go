package model

type User struct {
	User_id       string `json:"user_id"`
	User_name     string `json:"user_name"`
	Icon_url      string `json:"icon_url"`
	Header_url    string `json:"header_url"`
	Comment       string `json:"comment"`
	Account_id    string `json:"account_id"`
	Last_seen     string `json:"last_seen"`
	User_location string `json:"user_location"`
}
type Follow struct {
	Id           int    `json:"id"`
	Follow_id    string `json:"follow_id"`
	Following_id string `json:"following_id"`
}

type Content struct {
	Id          int    `json:"id"`
	Content_id  string `json:"content_id"`
	Image_url   string `json:"image_url"`
	Image_index int    `json:"image_index"`
}

type ContentHandling struct {
	Content_id    string `json:"content_id"`
	User_id       string `json:"user_id"`
	Detail        string `json:"detail"`
	Create_at     string `json:"create_at"`
	Title         string `json:"title"`
	Views         int    `json:"views"`
	Adult         bool   `json:"adult"`
	Like_count    int    `json:"like_count"`
	Commic        bool   `json:"commic"`
	Graffiti      bool   `json:"graffiti"`
	Rough         bool   `json:"rough"`
	Illustratio   bool   `json:"illustratio"`
	Release       bool   `json:"release"`
	Thumbnail_url string `json:"thumbnail_url"`
}

type TesttData struct {
	Content_id string `json:"content_id"`
	User_name  string `json:"user_name"`
	Icon_url   string `json:"icon_url"`
}

type ContentData struct {
	Content_id      string `json:"content_id"`
	User_id         string `json:"user_id"`
	User_name       string `json:"user_name"`
	Icon_url        string `json:"icon_url"`
	Detail          string `json:"detail"`
	Create_at       string `json:"create_at"`
	Title           string `json:"title"`
	Views           int    `json:"views"`
	Adult           bool   `json:"adult"`
	Image_url       string `json:"image_url"`
	Image_index     int    `json:"image_index"`
	Like_count      int    `json:"like_count"`
	Commic          bool   `json:"commic"`
	Graffiti        bool   `json:"graffiti"`
	Rough           bool   `json:"rough"`
	Illustratio     bool   `json:"illustratio"`
	User_bookmarked bool   `json:"user_bookmarked"`
	User_liked      bool   `json:"user_liked"`
}

type RturnIllustratio struct {
	illustratio []Content `json:"illustratio"`
}

type UserMainPage struct {
	UserData    User          `json:"userData"`
	Illustratio []ContentData `json:"illustratio"`
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

type ContentImages struct {
	Image_Url string
	Index     int
}
