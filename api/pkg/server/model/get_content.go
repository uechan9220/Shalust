package model

import (
	"log"
	"shalust/api/pkg/db"
)

type TestData struct {
	ContentHandling
	Image_url   string
	Image_index int
}

func GetAllIllustratio() ([]TestData, error) {
	var data []TestData

	client, err := db.Init_mysql()
	if err != nil {
		return data, err
	}

	// clientt := client.From("content_handling").Select("content_handling.*, illustratio.image_url, illustratio.image_index")

	clientt := client.From("content_handling, illustratio").Select("content_handling.*, illustratio.image_url, illustratio.image_index")

	clientt.Join("JOIN illustratio ON illustratio.content_id = content_handling.content_id").Scan(&data)

	log.Println(data)

	return data, err
}
