package model

import (
	"shalust/api/pkg/db"
)

func CreateUser(data User) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("user").Create(&data)
	return err
}
