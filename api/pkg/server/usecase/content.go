package usecase

import (
	"shalust/api/pkg/infra"
	"shalust/api/pkg/server/model"
)

func CahngeDisclose(content_id string, disclose bool) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	if disclose {
		client.Exec("UPDATE content_handling SET disclose= 1 WHERE content_id = ?", content_id)
	} else {
		client.Exec("UPDATE content_handling SET disclose= 0 WHERE content_id = ?", content_id)
	}
	defer client.Close()
	return err
}

func DeleteContent(content_id string) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	client.Exec("DELETE FROM content_data WHERE content_id = ?", content_id)
	client.Exec("DELETE FROM content_handling WHERE content_id = ?", content_id)

	defer client.Close()
	return err
}

func LikeContent(requestData model.UserLikeContent) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	requestData.User_liked = true
	client.From("likes").Create(&requestData)
	defer client.Close()
	return err
}
func BookmarkContent(requestData model.UserBookmarkContent) error {

	client, err := infra.Init_mysql()
	if err != nil {
		return err
	}
	requestData.User_bookmarked = true
	client.From("bookmarks").Create(&requestData)
	defer client.Close()
	return err
}
