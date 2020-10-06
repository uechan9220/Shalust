package usecase

import (
	"shalust/api/pkg/infra"
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
