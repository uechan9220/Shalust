package model

import (
	"log"
	"shalust/api/pkg/db"
)

func GetAllIllustratio() ([]ContentHandling, error) {
	var data []ContentHandling

	client, err := db.Init_mysql()
	if err != nil {
		return data, err
	}

	client.From("content_handling").Select("content_handling.* , illustratio.image_url, illustratio.image_index").Join("JOIN content_handling ON content_handling.content_id = illustratio.content_id").Find(&data)

	log.Println(data)

	return data, err
}
