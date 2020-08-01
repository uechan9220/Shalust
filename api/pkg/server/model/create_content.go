package model

import (
	"shalust/api/pkg/db"
)

func CreateIllustratio(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("content_data").Create(&data)
	return err
}

func CreateGraffiti(data Content) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("content_data").Create(&data)
	return err
}

func CreateRough(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("content_data").Create(&data)
	return err
}
func CreateCommic(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_data").Create(&data)
	return err
}
func CreateContentHandling(data ContentHandling) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_handling").Create(&data)
	return err
}
