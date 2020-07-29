package model

import (
	"log"
	"shalust/api/pkg/db"
	"time"
)

type TestData struct {
	Content_id  string    `json:"content_id"`
	User_id     string    `json:"user_id"`
	Detail      string    `json:"detail"`
	Create_at   time.Time `json:"create_at"`
	Title       string    `json:"title"`
	Views       int       `json:"views"`
	Adult       bool      `json:"adult"`
	Image_url   string    `json:"image_url"`
	Image_index int       `json:"image_index"`
}

func GetAllIllustratio() ([]TestData, error) {
	var data []TestData

	client, err := db.Init_mysql()
	if err != nil {
		return data, err
	}

	// clientt := client.From("content_handling").Select("content_handling.*, illustratio.image_url, illustratio.image_index")

	clientt := client.From("content_handling").Select("content_handling.content_id" +
		", illustratio.image_url, illustratio.image_index")

	clientt.Join("JOIN illustratio ON illustratio.content_id = content_handling.content_id").Scan(&data)

	log.Println(data)

	return data, err
}
