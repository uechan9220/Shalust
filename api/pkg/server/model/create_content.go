package model

import (
	"shalust/api/pkg/db"
)

func CreateIllustratio(data Illustratio) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	data.Illustratio = true
	client.From("illustratio").Create(&data)
	return err
}

func CreateGraffiti(data Graffiti) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	data.Graffiti = true
	client.From("graffiti").Create(&data)
	return err
}

func CreateRough(data Rough) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	data.Rough = true
	client.From("rough").Create(&data)
	return err
}
func CreateCommic(data Commic) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}

	data.Commic = true
	client.From("commic").Create(&data)
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
