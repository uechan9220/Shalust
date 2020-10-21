package infra

import (
	"shalust/api/pkg/model"
)

func CreateContentData(data model.Content) error {
	client, err := Init_mysql()
	if err != nil {
		return err
	}
	client.From("content_data").Create(&data)
	defer client.Close()
	return err
}

func CreateGraffitiHandling(data model.ContentHandling) error {

	client, err := Init_mysql()
	if err != nil {
		return err
	}
	data.Graffiti = true
	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func CreateIllustratioHandling(data model.ContentHandling) error {

	client, err := Init_mysql()
	if err != nil {
		return err
	}

	data.Illustratio = true
	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}

func CreateRoughtHandling(data model.ContentHandling) error {

	client, err := Init_mysql()
	if err != nil {
		return err
	}
	data.Rough = true

	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}
func CreateCommicHandling(data model.ContentHandling) error {

	client, err := Init_mysql()
	if err != nil {
		return err
	}
	data.Commic = true

	client.From("content_handling").Create(&data)
	defer client.Close()
	return err
}
func CreateContent(data model.Content) error {

	client, err := Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_data").Create(&data)
	defer client.Close()
	return err
}
