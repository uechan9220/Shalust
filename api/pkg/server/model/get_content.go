package model

import (
	"shalust/api/pkg/db"
)

func GetAllIllustratio() ([]ContentData, error) {
	var data []ContentData

	client, err := db.Init_mysql()
	if err != nil {
		return data, err
	}

	client.From("content_handling, content_data, user").
		Join("JOIN content_data ON content_data.content_id = content_handling.content_id").
		Join("JOIN user ON user.user_id = content_handling.user_id").
		Where("illustratio = 1").
		Scan(&data)

	return data, err
}

func GetUserIllustratio(user_id string, data *[]ContentData) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}

	client.From("content_handling, content_data, user").
		Join("JOIN content_data ON content_data.content_id = content_handling.content_id").
		Join("JOIN user ON user.user_id = content_handling.user_id").
		Where("user_id = ?", user_id).
		Where("illustratio = 1").
		Scan(data)

	defer client.Close()
	return err
}
