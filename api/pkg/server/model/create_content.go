package model

import (
	"shalust/api/pkg/db"
)

func CreateContentData(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("content_data").Create(&data)
	defer client.Close()
	return err
}

func CreateGraffitiHandling(data ContentHandling) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	data.Graffiti = true
	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func CreateIllustratioHandling(data ContentHandling) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}

	data.Illustratio = true
	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func CreateRoughtHandling(data ContentHandling) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	data.Rough = true

	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}
func CreateCommicHandling(data ContentHandling) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	data.Commic = true

	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}
