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
