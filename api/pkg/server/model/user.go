package model

import (
	db "shalust/api/pkg/infra"
)

func CreateUser(data User) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("user").Create(&data)
	defer client.Close()
	return err
}
func GetUserData(user_id string, data *User) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}
	client.From("user").Where("acount_id = ?", user_id).Scan(data)
	defer client.Close()
	return err
}
