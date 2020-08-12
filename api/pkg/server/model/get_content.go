package model

import (
	"shalust/api/pkg/db"
)

func GetAllIllustratio(data *[]ContentData) error {

	client, err := db.Init_mysql()
	if err != nil {
		return err
	}

	client.
		From("content_handling").
		Select(`content_handling.content_id, user.user_name, user.icon_url`).
		// Join("JOIN content_data ON content_data.content_id = content_handling.content_id").
		Join("JOIN user ON user.user_id = content_handling.user_id").
		// Join("JOIN likes ON likes.content_id = content_handling.content_id AND likes.user_id = ?", "testid2").
		// Where("illustratio = 1").
		Scan(data)

	// defer client.Close()
	return err
}

func GetUserIllustratio(user_id string, data *[]ContentData) error {
	client, err := db.Init_mysql()
	if err != nil {

		return err
	}

	client.From("content_handling, content_data, user").
		Join("JOIN content_data ON content_data.content_id = content_handling.content_id").
		Join("JOIN user ON user.user_id = content_handling.user_id").
		Where("content_handling.user_id = ?", user_id).
		Where("illustratio = 1").
		Scan(data)

	defer client.Close()
	return err
}
