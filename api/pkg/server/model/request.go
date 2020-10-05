package model

type PostContentData struct {
	User_id        string   `json:"user_id"`
	Detail         string   `json:"detail"`
	Create_at      string   `json:"create_at"`
	Title          string   `json:"title"`
	Adult          bool     `json:"adult"`
	Commic         bool     `json:"commic"`
	Graffiti       bool     `json:"graffiti"`
	Rough          bool     `json:"rough"`
	Illustratio    bool     `json:"illustratio"`
	Tags           []string `json:"tags"`
	Images         []Images `json:"images"`
	ThumbailNumber int      `json:"thumbailNumber"`
	Thumbnail_url  string   `json:"thumbnail_url"`
}

type Tag struct {
	Name string `json:"name`
}
type Images struct {
	Image string `json:"image`
	Index int    `json:"index`
}

type ManagementData struct {
	Commic      []ContentHandling `json:"commic"`
	Graffiti    []ContentHandling `json:"graffiti"`
	Rough       []ContentHandling `json:"rough"`
	Illustratio []ContentHandling `json:"illustratio"`
type UserData struct {
	User_id       string `json:"user_id"`
	User_name     string `json:"user_name"`
	Comment       string `json:"comment"`
	Last_seen     string `json:"last_seen"`
	Account_id    string `json:"account_id"`
	User_location string `json:"user_location"`
	Icon_image    string `json:"icon_image"`
	Header_image  string `json:"header_image"`
}
