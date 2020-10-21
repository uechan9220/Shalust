package infra

import (
	"shalust/api/pkg/model"
)

func CahngeDisclose(content_id string, disclose bool) error {

	client, err := Init_mysql()
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

	client, err := Init_mysql()
	if err != nil {
		return err
	}
	client.Exec("DELETE FROM content_data WHERE content_id = ?", content_id)
	client.Exec("DELETE FROM content_handling WHERE content_id = ?", content_id)

	defer client.Close()
	return err
}

func LikeContent(requestData model.UserLikeContent) error {

	client, err := Init_mysql()
	defer client.Close()
	if err != nil {
		return err
	}
	requestData.User_liked = true

	var data model.UserLikeContent
	client.From("likes").
		Where("user_id = ?", requestData.User_id).
		Where("content_id = ?", requestData.Content_id).
		Scan(&data)

	if data.User_liked {
		client.Exec("DELETE FROM likes WHERE content_id = ? AND user_id = ? ", requestData.Content_id, requestData.User_id)
		return err
	}

	client.From("likes").Create(&requestData)

	return err
}
func BookmarkContent(requestData model.UserBookmarkContent) error {

	client, err := Init_mysql()
	if err != nil {
		return err
	}
	requestData.User_bookmarked = true

	var data model.UserBookmarkContent
	client.From("bookmarks").
		Where("user_id = ?", requestData.User_id).
		Where("content_id = ?", requestData.Content_id).
		Scan(&data)

	if data.User_bookmarked {
		client.Exec("DELETE FROM bookmarks WHERE content_id = ? AND user_id = ? ", requestData.Content_id, requestData.User_id)
		return err
	}

	client.From("bookmarks").Create(&requestData)
	defer client.Close()
	return err
}
