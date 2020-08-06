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
func GetUserData(user_id string, data *User) error {
	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("user").Where("user_id = ?", user_id).Scan(data)
	return err
}
