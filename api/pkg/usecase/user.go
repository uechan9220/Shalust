package usecase

import (
	"shalust/api/pkg/infra"
	"shalust/api/pkg/model"
)

func CreateUser(data model.User) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	client.From("user").Create(&data)
	defer client.Close()
	return err
}
func GetUserData(user_id string, data *model.User) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	client.From("user").Where("account_id = ?", user_id).Scan(data)
	defer client.Close()
	return err
}
