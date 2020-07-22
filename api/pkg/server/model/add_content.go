package model

import (
	"shalust/api/pkg/db"
)

func CreateIllustratio(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("illustratio").Create(&data)
	return err
}

func CreateGraffiti(data Content) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("graffiti").Create(&data)
	return err
}

func CreateRough(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("rough").Create(&data)
	return err
}
func CreateCommic(data Content) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("commic").Create(&data)
	return err
}
