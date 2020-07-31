package model

import (
	"log"
	"shalust/api/pkg/db"
)

func GetAllIllustratio() ([]ContentData, error) {
	var data []ContentData

	client, err := db.Init_mysql()
	if err != nil {
		return data, err
	}

	client.From("content_handling, content_data").
		Join("JOIN content_data ON content_data.content_id = content_handling.content_id").
		Scan(&data)

	log.Println(data)

	return data, err
}
